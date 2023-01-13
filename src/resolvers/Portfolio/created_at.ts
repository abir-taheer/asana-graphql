import { Resolver, Portfolio } from "types";

export const created_at: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.created_at === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.created_at;
};