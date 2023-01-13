import { Query } from "./Query";
import { Workspace } from "./Workspace";
import { User } from "./User";
import { resolvers as scalars } from "graphql-scalars";

export const resolvers = {
  Query,
  Workspace,
  User,
  ...scalars,
};
