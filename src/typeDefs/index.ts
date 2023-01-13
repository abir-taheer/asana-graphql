import { PaginationParams } from "./PaginationParams";
import { Query } from "./Query";
import { User } from "./User";
import { Workspace } from "./Workspace";
import { Portfolio } from "./Portfolio";
import { Project } from "./Project";
import { Tag } from "./Tag";
import { Task } from "./Task";

import { typeDefs as scalars } from "graphql-scalars";

export const typeDefs = [
  PaginationParams,
  Query,
  User,
  scalars,
  Workspace,
  Project,
  Portfolio,
  Tag,
  Task,
];
