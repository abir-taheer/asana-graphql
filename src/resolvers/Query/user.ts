import { Resolver } from "types";

export type UserQueryArgs = {
  id: string;
};

export const user: Resolver<null, UserQueryArgs> = (
  parent,
  { id },
  { userIdLoader }
) => {
  return userIdLoader.load(id);
};
