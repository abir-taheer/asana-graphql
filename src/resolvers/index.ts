import { Query } from "./Query";
import { resolvers as scalars } from "graphql-scalars";

export const resolvers = {
  Query,
  ...scalars,
};
