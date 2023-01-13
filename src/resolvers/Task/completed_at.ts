import { Resolver, Task } from "types";

export const completed_at: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.completed_at === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.completed_at;
};