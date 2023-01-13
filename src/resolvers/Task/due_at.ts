import { Resolver, Task } from "types";

export const due_at: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.due_at === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.due_at;
};