import { Resolver, Tag } from "types";

export const resource_type: Resolver<Tag> = async (parent, args, { tagIdLoader }) => {
  let tag = parent;
  
  if (typeof tag.resource_type === "undefined") {
    tag = await tagIdLoader.load(parent.gid);
  }
  return tag.resource_type;
};