import { Resolver, Portfolio } from "types";

export const name: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.name === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.name;
};