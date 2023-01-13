import axios from "axios";

export type BatchAction = {
  data: Record<any, any>;
  options: Record<any, any>;
  relative_path: string;
  method: string;
};

export type BatchResponseData<Type> = {
  body: {
    data: Type;
  };
  status_code: number;
  headers: {
    keys: string[];
    as_tuples: string[];
    empty: boolean;
    traversable_again: boolean;
  };
};

export type BatchResponseType<Type> = {
  data: BatchResponseData<Type>[];
};

export const batch = async <ResultType = unknown>(
  accessToken: string,
  actions: BatchAction[]
) => {
  const data = {
    data: { actions },
  };

  const config = {
    method: "post",
    url: "https://app.asana.com/api/1.0/batch",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
    data,
  };

  const res = await axios<BatchResponseType<ResultType>>(config);

  // This is ugly but alas there's no way around it
  return res.data.data;
};
