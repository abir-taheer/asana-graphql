import { Resolver, Task } from "types";

export const workspace: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.workspace === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.workspace;
};