import { Resolver, Portfolio } from "types";

export const gid: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.gid === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.gid;
};