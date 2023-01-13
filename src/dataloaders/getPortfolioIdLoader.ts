import { getSimpleLoader } from "dataloaders/getSimpleLoader";
import { Portfolio } from "types";

export const getPortfolioIdLoader = (accessToken: string) => {
  return getSimpleLoader<string, Portfolio>(accessToken, "portfolios/%s");
};
