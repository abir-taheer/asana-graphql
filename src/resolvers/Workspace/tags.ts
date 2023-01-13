import { Resolver, Workspace } from "types";

export const tags: Resolver<Workspace> = async (
  workspace,
  args,
  { workspaceIdTagsLoader }
) => {
  return await workspaceIdTagsLoader.load(workspace.gid);
};
