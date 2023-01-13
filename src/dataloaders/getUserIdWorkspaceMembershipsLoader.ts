import { getSimpleLoader } from "dataloaders/getSimpleLoader";
import { WorkspaceMembership } from "types";

export const getUserIdWorkspaceMembershipsLoader = (accessToken: string) => {
  return getSimpleLoader<string, WorkspaceMembership[]>(
    accessToken,
    "users/%s/workspace_memberships"
  );
};
