import { Resolver, Tag } from "types";

export const resource_subtype: Resolver<Tag> = async (parent, args, { tagIdLoader }) => {
  let tag = parent;
  
  if (typeof tag.resource_subtype === "undefined") {
    tag = await tagIdLoader.load(parent.gid);
  }
  return tag.resource_subtype;
};