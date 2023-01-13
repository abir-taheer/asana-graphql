export const Workspace = `
#graphql
type Workspace {
    gid: ID!
    name: String
    
    users(limit: Int, offset: String): [User!]!
    portfolios: [Portfolio!]
}
`;
