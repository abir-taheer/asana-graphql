import { Resolver, Task } from "types";

export const gid: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.gid === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.gid;
};