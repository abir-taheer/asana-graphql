import { Resolver, Task } from "types";

export const tags: Resolver<Task> = async (
  parent,
  args,
  { tagIdLoader, taskIdLoader }
) => {
  let task = parent;

  if (!task.tags) {
    task = await taskIdLoader.load(parent.gid);
  }
  return tagIdLoader.loadMany(task.tags.map((a) => a.gid));
};
