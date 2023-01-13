import { Resolver, Task } from "types";

export const assignee: Resolver<Task> = async (
  parent,
  args,
  { taskIdLoader, userIdLoader }
) => {
  let task = parent;

  if (!task.assignee) {
    task = await taskIdLoader.load(parent.gid);
  }

  return userIdLoader.load(task.assignee!.gid);
};
