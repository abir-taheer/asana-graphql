import { Resolver } from "types";

export const me: Resolver = (parent, args, { me }) => {
  return me;
};
