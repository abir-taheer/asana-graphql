import { Resolver, Task } from "types";

export const start_at: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.start_at === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.start_at;
};