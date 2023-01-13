import { Resolver, Tag } from "types";

export const notes: Resolver<Tag> = async (parent, args, { tagIdLoader }) => {
  let tag = parent;
  
  if (typeof tag.notes === "undefined") {
    tag = await tagIdLoader.load(parent.gid);
  }
  return tag.notes;
};