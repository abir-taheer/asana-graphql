import { Resolver, Portfolio } from "types";

export const created_by: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.created_by === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.created_by;
};