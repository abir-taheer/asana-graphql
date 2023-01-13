export const Tag = `
#graphql

type Tag {
    gid: ID!
    name: String!
    resource_type: String!
    resource_subtype: String!
    color: String
    followers: [User]
    workspace: Workspace
    notes: String
}
`;
