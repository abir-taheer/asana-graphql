import {
  Portfolio,
  Project,
  Tag,
  Task,
  User,
  Workspace,
  WorkspaceMembership,
} from "types";
import { getSimpleLoader } from "dataloaders/getSimpleLoader";

export const getLoaders = (token: string) => {
  // Gets user by id
  const userIdLoader = getSimpleLoader<string, User>(token, "users/%s");

  // Gets workspace by id
  const workspaceIdLoader = getSimpleLoader<string, Workspace>(
    token,
    "workspaces/%s"
  );

  // Gets portfolio by id
  const portfolioIdLoader = getSimpleLoader<string, Portfolio>(
    token,
    "portfolios/%s"
  );

  // Gets a project by id
  const projectIdLoader = getSimpleLoader<string, Project>(
    token,
    "projects/%s"
  );

  // Gets tag by id
  const tagIdLoader = getSimpleLoader<string, Tag>(token, "tags/%s");

  // Gets task by id
  const taskIdLoader = getSimpleLoader<string, Task>(token, "tasks/%s");

  // Loads the tags for a workspace by workspace ID
  const workspaceIdTagsLoader = getSimpleLoader<string, Tag[]>(
    token,
    "workspaces/%s/tags",
    {
      limit: 50,
    }
  );

  // Loads the workspace memberships for a user by user ID
  const userIdWorkspaceMembershipsLoader = getSimpleLoader<
    string,
    WorkspaceMembership[]
  >(token, "users/%s/workspace_memberships");

  return {
    userIdLoader,
    workspaceIdLoader,
    portfolioIdLoader,
    projectIdLoader,
    tagIdLoader,
    taskIdLoader,
    workspaceIdTagsLoader,
    userIdWorkspaceMembershipsLoader,
  };
};

export type AllLoaders = ReturnType<typeof getLoaders>;
