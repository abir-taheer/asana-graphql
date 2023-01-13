import { Resolver, User } from "types";

export const email: Resolver<User> = async (parent, args, { userIdLoader }) => {
  let user = parent;
  if (typeof parent.email === "undefined") {
    user = await userIdLoader.load(parent.gid);
  }

  return user?.email;
};
