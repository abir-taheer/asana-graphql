import { Resolver, Project } from "types";

export const workspace: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.workspace === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.workspace;
};