import { Resolver, Workspace } from "types";

export const tags: Resolver<Workspace> = async (
  workspace,
  args,
  { workspaceIdTagsLoader }
) => {
  try {
    return await workspaceIdTagsLoader.load(workspace.gid);
  } catch (error) {
    console.log(error);
  }
};
