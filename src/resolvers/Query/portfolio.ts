import { Resolver } from "types";

export type PortfolioQueryArgs = {
  id: string;
};

export const portfolio: Resolver<null, PortfolioQueryArgs> = (
  parent,
  { id },
  { portfolioIdLoader }
) => {
  return portfolioIdLoader.load(id);
};
