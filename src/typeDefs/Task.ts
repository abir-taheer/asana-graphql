export const Task = `
#graphql
type Task {
    gid: ID!
    name: String!
    resource_type: String!
    resource_subtype: String!
    assignee: User
    completed: Boolean
    due_on: Date
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
    completed_at: Time
    due_at: Time
    start_at: Time
    start_on: Date
}
`;
