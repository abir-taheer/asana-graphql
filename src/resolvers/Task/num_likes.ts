import { Resolver, Task } from "types";

export const num_likes: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.num_likes === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.num_likes;
};