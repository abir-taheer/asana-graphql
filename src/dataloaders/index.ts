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

  // Get tasks that belong to a certain tag based on tag ids
  const tagIdTasksLoader = getSimpleLoader<string, Task[]>(
    token,
    "/tasks",
    ({ id }) => ({
      tag: id,
      limit: 10,
    })
  );

  const projectIdTasksLoader = getSimpleLoader<string, Task[]>(
    token,
    "/tasks",
    ({ id }) => ({
      project: id,
      limit: 10,
    })
  );

  // Loads the tags for a workspace by workspace ID
  const workspaceIdTagsLoader = getSimpleLoader<string, Tag[]>(
    token,
    "workspaces/%s/tags",
    {
      limit: 50,
    }
  );

  const portfolioIdItemsLoader = getSimpleLoader<string, Project[]>(
    token,
    "portfolios/%s/items",
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
    tagIdTasksLoader,
    workspaceIdTagsLoader,
    userIdWorkspaceMembershipsLoader,
    projectIdTasksLoader,
    portfolioIdItemsLoader,
    getSimpleLoader,
  };
};

export type AllLoaders = ReturnType<typeof getLoaders>;
