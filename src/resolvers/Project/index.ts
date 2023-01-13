import { archived } from "./archived";
import { color } from "./color";
import { followers } from "./followers";
import { members } from "./members";
import { name } from "./name";
import { notes } from "./notes";
import { publicResolver } from "./public";
import { resource_subtype } from "./resource_subtype";
import { resource_type } from "./resource_type";
import { tasks } from "./tasks";
import { workspace } from "./workspace";

export const Project = {
  archived,
  color,
  followers,
  members,
  name,
  notes,
  public: publicResolver,
  resource_subtype,
  resource_type,
  tasks,
  workspace,
};
