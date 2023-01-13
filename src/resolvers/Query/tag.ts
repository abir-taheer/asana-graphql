import { Resolver } from "types";

export type TagQueryArgs = {
  id: string;
};

export const tag: Resolver<null, TagQueryArgs> = async (
  parent,
  { id },
  { tagIdLoader }
) => {
  return tagIdLoader.load(id);
};
