export const Task = `
#graphql
type Task {
    """
    approval_status: string | undefined;
    created_at: string;
    modified_at: string;
    completed_at: string | null;
    completed: boolean;
    dependencies: Resource[]; // opt in
    dependents: Resource[]; // opt in
    due_on: string | null;
    start_at: string | null;
    start_on: string | null;
    due_at: string | null;
    assignee_status: string; // deprecated
    assignee: Assignee | null;
    assignee_section: Resource;
    external:
    | {
// opt-in
data: string | undefined;
gid: string | undefined;
}
| undefined;
html_notes: string | undefined; // opt in
is_rendered_as_separator: boolean | undefined; // opt in
notes: string;
workspace: Resource;
parent: Resource | null;
num_likes: number;
num_subtasks: number; // opt in
liked: boolean;
likes: {
gid: string;
user: Resource;
}[];
tags: Resource[];
projects: Resource[];
memberships: Membership[];
followers: Resource[];
custom_fields: CustomField[];
permalink_url: string;
    """
    gid: ID!
    name: String!
    resource_type: String!
    resource_subtype: String!
    assignee: User
    completed: Boolean
    due_on: String
    followers: [User]
    parent: Task
    projects: [Project]
    tags: [Tag]
    workspace: Workspace
#    memberships: [Membership]
    
    notes: String
    html_notes: String
    num_subtasks: Int
    num_likes: Int
    liked: Boolean
    permalink_url: URL
    created_at: DateTime
    modified_at: DateTime
    completed_at: DateTime
    due_at: DateTime
    start_at: DateTime
    start_on: DateTime
}
`;
