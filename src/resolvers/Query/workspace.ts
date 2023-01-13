import { Resolver } from "types";

export type WorkspaceQueryArgs = {
  id: string;
};

export const workspace: Resolver<null, WorkspaceQueryArgs> = (
  parent,
  { id },
  { workspaceIdLoader }
) => {
  return workspaceIdLoader.load(id);
};
