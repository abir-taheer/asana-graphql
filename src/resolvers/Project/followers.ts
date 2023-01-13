import { Resolver, Project } from "types";

export const followers: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.followers === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.followers;
};