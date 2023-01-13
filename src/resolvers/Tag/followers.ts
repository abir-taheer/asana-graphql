import { Resolver, Tag } from "types";

export const followers: Resolver<Tag> = async (parent, args, { tagIdLoader }) => {
  let tag = parent;
  
  if (typeof tag.followers === "undefined") {
    tag = await tagIdLoader.load(parent.gid);
  }
  return tag.followers;
};