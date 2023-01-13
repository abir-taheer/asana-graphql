import { Resolver, Portfolio } from "types";

export const color: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.color === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.color;
};