import { Resolver, Task } from "types";

export const modified_at: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.modified_at === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.modified_at;
};