import { Query } from "./Query";
import { User } from "./User";
import { Workspace } from "./Workspace";

import { typeDefs as scalars } from "graphql-scalars";

export const typeDefs = [Query, User, scalars, Workspace];
