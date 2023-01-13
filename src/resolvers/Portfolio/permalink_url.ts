import { Resolver, Portfolio } from "types";

export const permalink_url: Resolver<Portfolio> = async (parent, args, { portfolioIdLoader }) => {
  let portfolio = parent;
  
  if (typeof portfolio.permalink_url === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.permalink_url;
};