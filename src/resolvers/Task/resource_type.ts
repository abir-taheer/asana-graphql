import { Resolver, Task } from "types";

export const resource_type: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.resource_type === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.resource_type;
};