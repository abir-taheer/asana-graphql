import { Resolver, Workspace } from "types";
import { getData } from "getData";

export type WorkspaceUsersArgs = {
  limit?: number;
  offset?: string;
};

export const users: Resolver<Workspace, WorkspaceUsersArgs> = (
  parent,
  { limit, offset },
  { asana }
) => {
  return getData(
    asana.users.findAll({
      workspace: parent.gid,
      limit,
      offset,
    })
  );
};
