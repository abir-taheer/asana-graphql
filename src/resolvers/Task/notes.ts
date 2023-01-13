import { Resolver, Task } from "types";

export const notes: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.notes === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.notes;
};