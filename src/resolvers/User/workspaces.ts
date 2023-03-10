import { Resolver, User } from "types";

export const workspaces: Resolver<User> = async (
  parent,
  args,
  { userIdWorkspaceMembershipsLoader, workspaceIdLoader }
) => {
  const memberships = await userIdWorkspaceMembershipsLoader.load(parent.gid);

  return workspaceIdLoader.loadMany(
    memberships.map((membership) => membership.workspace.gid)
  );
};
