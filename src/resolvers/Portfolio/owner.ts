import { Resolver, Portfolio } from "types";

export const owner: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.owner === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.owner;
};