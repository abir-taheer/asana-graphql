import { getUserIdLoader } from "dataloaders/getUserIdLoader";
import { getWorkspaceIdLoader } from "dataloaders/getWorkspaceIdLoader";
import DataLoader from "dataloader";
import { Portfolio, User, Workspace, WorkspaceMembership } from "types";
import { getPortfolioIdLoader } from "dataloaders/getPortfolioIdLoader";
import { getUserIdWorkspaceMembershipsLoader } from "dataloaders/getUserIdWorkspaceMembershipsLoader";

export type AllLoaders = {
  userIdLoader: DataLoader<string, User>;
  workspaceIdLoader: DataLoader<string, Workspace>;
  portfolioIdLoader: DataLoader<string, Portfolio>;
  userIdWorkspaceMembershipsLoader: DataLoader<string, WorkspaceMembership[]>;
};

export const getLoaders = (accessToken: string): AllLoaders => {
  return {
    userIdLoader: getUserIdLoader(accessToken),
    workspaceIdLoader: getWorkspaceIdLoader(accessToken),
    portfolioIdLoader: getPortfolioIdLoader(accessToken),
    userIdWorkspaceMembershipsLoader:
      getUserIdWorkspaceMembershipsLoader(accessToken),
  };
};
