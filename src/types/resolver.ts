import { Context } from "context";
import { GraphQLFieldResolver } from "graphql/type/definition";

export type Resolver<
  Parent = unknown,
  Args = unknown,
  ReturnType = unknown
> = GraphQLFieldResolver<
  Parent,
  Context,
  Args,
  ReturnType | Promise<ReturnType>
>;
