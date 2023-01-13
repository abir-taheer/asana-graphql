import { Resolver, Task } from "types";

export const num_subtasks: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.num_subtasks === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.num_subtasks;
};