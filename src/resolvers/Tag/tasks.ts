import { Resolver, Tag } from "types";

export const tasks: Resolver<Tag> = async (tag, args, { tagIdTasksLoader }) => {
  return await tagIdTasksLoader.load(tag.gid);
};
