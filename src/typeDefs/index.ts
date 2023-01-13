import { PaginationParams } from "./PaginationParams";
import { Query } from "./Query";
import { User } from "./User";
import { Workspace } from "./Workspace";
import { Portfolio } from "./Portfolio";

import { typeDefs as scalars } from "graphql-scalars";

export const typeDefs = [
  PaginationParams,
  Query,
  User,
  scalars,
  Workspace,
  Portfolio,
];
