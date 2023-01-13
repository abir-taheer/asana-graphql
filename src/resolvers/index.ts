import { Query } from "./Query";
import { Workspace } from "./Workspace";
import { Task } from "./Task";
import { User } from "./User";
import { Tag } from "./Tag";
import { Portfolio } from "./Portfolio";
import { Project } from "./Project";
import { resolvers as scalars } from "graphql-scalars";

export const resolvers = {
  Query,
  Workspace,
  User,
  Task,
  Tag,
  Portfolio,
  Project,
  ...scalars,
};
