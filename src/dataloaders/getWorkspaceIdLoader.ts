import { Workspace } from "types";
import { getSimpleLoader } from "dataloaders/getSimpleLoader";

export const getWorkspaceIdLoader = (accessToken: string) => {
  return getSimpleLoader<string, Workspace>(accessToken, "workspaces/%s");
};
