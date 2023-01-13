import { Resolver, Project } from "types";

export const notes: Resolver<Project> = async (parent, args, { projectIdLoader }) => {
  let project = parent;
  
  if (typeof project.notes === "undefined") {
    project = await projectIdLoader.load(parent.gid);
  }
  return project.notes;
};