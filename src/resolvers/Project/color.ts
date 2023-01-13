import { Resolver, Project } from "types";

export const color: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.color === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.color;
};