import { Resolver, Project } from "types";

export const name: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.name === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.name;
};