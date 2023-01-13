import { Resolver, Project } from "types";

export const archived: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.archived === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.archived;
};