import { Resolver, Project } from "types";

export const resource_type: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.resource_type === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.resource_type;
};