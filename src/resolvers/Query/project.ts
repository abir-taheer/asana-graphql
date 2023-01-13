import { Resolver } from "types";

export type ProjectQueryArgs = {
  id: string;
};

export const project: Resolver<null, ProjectQueryArgs> = (
  parent,
  { id },
  { projectIdLoader }
) => {
  return projectIdLoader.load(id);
};
