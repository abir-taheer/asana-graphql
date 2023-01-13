import { Portfolio, PortfolioMembership, Resolver, User } from "types";
import { batch, BatchAction } from "utils/batch";

export const portfolios: Resolver<User> = async (
  user,
  args,
  { me, apiToken, portfolioIdLoader }
) => {
  // You're only allowed to fetch your own portfolios
  if (user.gid !== me.gid) {
    return null;
  }

  const actions: BatchAction[] = me.workspaces.map((workspace) => ({
    data: {
      user: user.gid,
      workspace: workspace.gid,
    },
    options: {},
    relative_path: "/portfolio_memberships",
    method: "GET",
  }));

  const memberships = await batch<PortfolioMembership[]>(apiToken, actions);

  const portfolioIds = memberships
    .map((res) => res.body.data)
    .flat(1)
    .map((a) => a.portfolio.gid);

  return portfolioIdLoader.loadMany(portfolioIds);
};
