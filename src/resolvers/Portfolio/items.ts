import { Portfolio, Resolver } from "types";

export const items: Resolver<Portfolio> = async (
  parent,
  args,
  { portfolioIdItemsLoader }
) => {
  const items = await portfolioIdItemsLoader.load(parent.gid);

  return items.filter((item) => item.resource_type === "project");
};
