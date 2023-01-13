import { Resolver, Task } from "types";

export const created_at: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.created_at === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.created_at;
};