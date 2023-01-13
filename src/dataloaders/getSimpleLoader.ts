import DataLoader, { BatchLoadFn } from "dataloader";
import { batch, BatchAction } from "utils/batch";
import { format } from "util";

export const getSimpleLoader = <KeyType, OutputType>(
  accessToken: string,
  path: string
) => {
  const handler: BatchLoadFn<KeyType, OutputType> = async (ids) => {
    const actions: BatchAction[] = ids.map((id) => ({
      data: {},
      options: {},
      relative_path: format(path, id),
      method: "GET",
    }));

    const output = await batch<OutputType>(accessToken, actions);

    return output.map((res) => res.body.data);
  };

  return new DataLoader<KeyType, OutputType>(handler, {
    maxBatchSize: 50,
  });
};
