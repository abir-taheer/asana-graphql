import { Resolver, Task } from "types";

export const projects: Resolver<Task> = (parent, args, { projectIdLoader }) => {
  return projectIdLoader.loadMany(parent.projects.map((a) => a.gid));
};
