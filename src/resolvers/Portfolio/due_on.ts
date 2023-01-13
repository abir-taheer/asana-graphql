import { Resolver, Portfolio } from "types";

export const due_on: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.due_on === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.due_on;
};