import { Resolver, Task } from "types";

export const due_on: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.due_on === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.due_on;
};