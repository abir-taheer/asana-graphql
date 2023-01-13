import { Resolver, Task } from "types";

export const resource_subtype: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.resource_subtype === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.resource_subtype;
};