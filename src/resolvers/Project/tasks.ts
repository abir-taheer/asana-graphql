import { Resolver, Project } from "types";

export const tasks: Resolver<Project> = async (
  parent,
  args,
  { projectIdTasksLoader }
) => {
  return projectIdTasksLoader.load(parent.gid);
};
