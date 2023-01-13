import { Resolver, Project } from "types";

export const resource_subtype: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.resource_subtype === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.resource_subtype;
};