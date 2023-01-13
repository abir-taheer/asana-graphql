import { getUserIdLoader } from "dataloaders/getUserIdLoader";
import { getWorkspaceIdLoader } from "dataloaders/getWorkspaceIdLoader";
import DataLoader from "dataloader";
import { Portfolio, User, Workspace } from "types";
import { getPortfolioIdLoader } from "dataloaders/getPortfolioIdLoader";

export type AllLoaders = {
  userIdLoader: DataLoader<string, User>;
  workspaceIdLoader: DataLoader<string, Workspace>;
  portfolioIdLoader: DataLoader<string, Portfolio>;
};

export const getLoaders = (accessToken: string): AllLoaders => {
  return {
    userIdLoader: getUserIdLoader(accessToken),
    workspaceIdLoader: getWorkspaceIdLoader(accessToken),
    portfolioIdLoader: getPortfolioIdLoader(accessToken),
  };
};
