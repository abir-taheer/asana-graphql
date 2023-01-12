import { Context } from "context";
import { GraphQLFieldResolver } from "graphql/type/definition";

export type Resolver<Parent, Args, ReturnType> = GraphQLFieldResolver<
  Parent,
  Context,
  Args,
  ReturnType | Promise<ReturnType>
>;
