import { Resolver, Portfolio } from "types";

export const start_on: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.start_on === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.start_on;
};