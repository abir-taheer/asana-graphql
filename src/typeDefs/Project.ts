export const Project = `
#graphql
type Project {
    
    gid: ID!
    name: String!
    resource_type: String!
    resource_subtype: String!
    color: String
    notes: String
    archived: Boolean
    public: Boolean
    workspace: Workspace
    members: [User]
    followers: [User]
    tasks: [Task]
}
`;
