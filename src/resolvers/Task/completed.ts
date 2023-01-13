import { Resolver, Task } from "types";

export const completed: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.completed === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.completed;
};