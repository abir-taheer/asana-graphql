import { Resolver, Portfolio } from "types";

export const members: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.members === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.members;
};