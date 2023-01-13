import { Resolver, Project } from "types";

export const members: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.members === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.members;
};