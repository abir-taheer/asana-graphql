import { Resolver, Tag } from "types";

export const color: Resolver<Tag> = async (parent, args, { tagIdLoader }) => {
  let tag = parent;
  
  if (typeof tag.color === "undefined") {
    tag = await tagIdLoader.load(parent.gid);
  }
  return tag.color;
};