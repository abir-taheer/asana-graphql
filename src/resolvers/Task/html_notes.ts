import { Resolver, Task } from "types";

export const html_notes: Resolver<Task> = async (parent, args, { taskIdLoader }) => {
  let task = parent;
  
  if (typeof task.html_notes === "undefined") {
    task = await taskIdLoader.load(parent.gid);
  }
  return task.html_notes;
};