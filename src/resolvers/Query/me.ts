import { Resolver, User } from "types";

export const me: Resolver<null, null, User> = async (
  parent,
  args,
  { asana }
) => {
  return asana.users.me();
};
