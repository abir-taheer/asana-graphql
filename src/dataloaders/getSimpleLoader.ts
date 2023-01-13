import DataLoader, { BatchLoadFn } from "dataloader";
import { batch, BatchAction } from "utils/batch";
import { format } from "util";

type GetterProps<InputType> = {
  id: InputType;
};

type GetterFn<Input, Output> = (props: GetterProps<Input>) => Output;

type Getter<Input, Output> = Output | GetterFn<Input, Output>;

const Get = <Input, Output>(
  getter: Getter<Input, Output>,
  props: GetterProps<Input>
) => {
  if (typeof getter === "function") {
    // @ts-ignore
    return getter(props);
  }

  return getter;
};

const cache: { [key: string]: DataLoader<any, any> } = {};

export const getSimpleLoader = <KeyType, OutputType>(
  accessToken: string,
  path: string,
  batchData?: Getter<KeyType, BatchAction["data"]>,
  batchOptions?: Getter<KeyType, BatchAction["options"]>,
  dataloaderOptions?: DataLoader.Options<KeyType, OutputType>
) => {
  const batchDataStr =
    typeof batchData === "function"
      ? batchData.toString()
      : JSON.stringify(batchData);

  const batchOptionsStr =
    typeof batchOptions === "function"
      ? batchOptions.toString()
      : JSON.stringify(batchOptions);

  const cacheKey = JSON.stringify([
    accessToken,
    path,
    batchDataStr,
    batchOptionsStr,
    dataloaderOptions,
  ]);

  if (cache[cacheKey]) {
    return cache[cacheKey] as DataLoader<KeyType, OutputType>;
  }

  const handler: BatchLoadFn<KeyType, OutputType> = async (ids) => {
    const actions: BatchAction[] = ids.map((id) => {
      const data = Get(batchData, { id });
      const options = Get(batchOptions, { id });

      const relative_path = path.includes("%s") ? format(path, id) : path;

      return {
        data: { ...data },
        options: { ...options },
        relative_path,
        method: "GET",
      };
    });

    const output = await batch<OutputType>(accessToken, actions);

    return output.map((res) => res.body.data);
  };

  const loader = new DataLoader<KeyType, OutputType>(handler, {
    maxBatchSize: 10,
    ...dataloaderOptions,
  });

  cache[cacheKey] = loader;

  return loader;
};
