import { Resolver, Task } from "types";

export const permalink_url: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.permalink_url === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.permalink_url;
};