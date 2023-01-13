import { Resolver, Tag } from "types";

export const name: Resolver<Tag> = async (parent, args, { tagIdLoader }) => {
  let tag = parent;
  
  if (typeof tag.name === "undefined") {
    tag = await tagIdLoader.load(parent.gid);
  }
  return tag.name;
};