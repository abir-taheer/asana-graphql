import { Resolver } from "types";

export type TaskQueryArgs = {
  id: string;
};

export const task: Resolver<null, TaskQueryArgs> = (
  parent,
  { id },
  { taskIdLoader }
) => {
  return taskIdLoader.load(id);
};
