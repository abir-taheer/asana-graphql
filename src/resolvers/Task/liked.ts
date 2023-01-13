import { Resolver, Task } from "types";

export const liked: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.liked === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.liked;
};