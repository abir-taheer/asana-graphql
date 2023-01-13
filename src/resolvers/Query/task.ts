import { Resolver } from "types";

export type TaskQueryArgs = {
  id: string;
};

export const task: Resolver<null, TaskQueryArgs> = (
  parent,
  { id },
  { taskIdLoader }
) => {
  // get DataLoaders for each organization that they're in

  return taskIdLoader.load(id);
};
