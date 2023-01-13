import { Resolver, Project } from "types";

export const publicResolver: Resolver<Project> = async (
  parent,
  args,
  { projectIdLoader }
) => {
  let project = parent;

  if (typeof project.public === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.public;
};
