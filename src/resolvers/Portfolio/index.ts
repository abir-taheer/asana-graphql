import { color } from "./color";
import { created_at } from "./created_at";
import { created_by } from "./created_by";
import { current_status_update } from "./current_status_update";
import { due_on } from "./due_on";
import { gid } from "./gid";
import { members } from "./members";
import { name } from "./name";
import { owner } from "./owner";
import { permalink_url } from "./permalink_url";
import { publicResolver } from "./public";
import { start_on } from "./start_on";
import { workspace } from "./workspace";
import { items } from "./items";

export const Portfolio = {
  color,
  created_at,
  created_by,
  current_status_update,
  due_on,
  gid,
  members,
  name,
  owner,
  permalink_url,
  public: publicResolver,
  start_on,
  workspace,
  items,
};
