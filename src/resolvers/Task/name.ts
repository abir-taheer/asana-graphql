import { Resolver, Task } from "types";

export const name: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.name === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.name;
};