import { Resolver, Portfolio } from "types";

export const workspace: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.workspace === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.workspace;
};