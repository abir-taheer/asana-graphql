import { Resolver, Tag } from "types";

export const workspace: Resolver<Tag> = async (parent, args, { tagIdLoader }) => {
  let tag = parent;
  
  if (typeof tag.workspace === "undefined") {
    tag = await tagIdLoader.load(parent.gid);
  }
  return tag.workspace;
};