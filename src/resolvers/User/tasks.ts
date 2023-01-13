import { Resolver, User } from "types";

export const tasks: Resolver<User> = async (
  user,
  args,
  {
    tagIdTasksLoader,
    userIdWorkspaceMembershipsLoader,
    getSimpleLoader,
    apiToken,
  },
  other
) => {
  const memberships = await userIdWorkspaceMembershipsLoader.load(user.gid);

  const workspaceIds = memberships.map(
    (membership) => membership.workspace.gid
  );

  const loaders = workspaceIds.map((workspaceId) => {
    return getSimpleLoader(apiToken, `tasks`, ({ id }) => ({
      workspace: workspaceId,
      limit: 10,
      assignee: id,
    }));
  });

  const tasksByWorkspace = await Promise.all(
    loaders.map((loader) => loader.load(user.gid))
  );

  return tasksByWorkspace.flat();
};
