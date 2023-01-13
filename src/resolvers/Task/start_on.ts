import { Resolver, Task } from "types";

export const start_on: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.start_on === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.start_on;
};