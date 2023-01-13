import { Resolver, Portfolio } from "types";

export const publicResolver: Resolver<Portfolio> = async (
  parent,
  args,
  { portfolioIdLoader }
) => {
  let portfolio = parent;

  if (typeof portfolio.public === "undefined") {
    portfolio = await portfolioIdLoader.load(parent.gid);
  }
  return portfolio.public;
};
