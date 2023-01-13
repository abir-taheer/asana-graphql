import asana from "asana";

export type User = asana.resources.Users.Type;
export type Workspace = asana.resources.Workspaces.Type;
export type Task = asana.resources.Tasks.Type;
export type Tag = asana.resources.Tags.Type;
export type Project = asana.resources.Projects.Type;
export type ResourceProps<Object> = Pick<any, "gid" | "name" | "resource_type">;

export type PortfolioMembership = {
  gid: string;
  portfolio: ResourceProps<Portfolio>;
  resource_type: "portfolio_membership";
  user: ResourceProps<User>;
};

export type WorkspaceMembership = {
  gid: string;
  resource_type: "workspace_membership";
  user: ResourceProps<User>;
  workspace: ResourceProps<Workspace>;
};

export type Portfolio = {
  gid: string;
  color: string;
  created_at: string;
  created_by: ResourceProps<User>;
  current_status_update: {
    gid: string;
    resource_type: string;
    resource_subtype: string;
    title: string;
  };
  due_on: string | null;
  members: ResourceProps<User>[];
  name: string;
  owner: ResourceProps<User>;
  permalink_url: string;
  resource_type: string;
  start_on: string | null;
  workspace: ResourceProps<Workspace>;
  public: boolean;
};
