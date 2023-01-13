import { Resolver, Task } from "types";

export const parent: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.parent === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.parent;
};