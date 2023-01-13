export const Portfolio = `
#graphql

type PortfolioStatusUpdate {
    gid: ID
    resource_type: String
    resource_subtype:String
    title: String
}

type Portfolio  {
    gid: ID!
    name: String
    color: String
    created_at: DateTime
    created_by: User
    current_status_update: PortfolioStatusUpdate
    due_on: DateTime
    members: [User] 
    owner: User
    permalink_url: URL
    start_on: DateTime
    workspace: Workspace
    public: Boolean
}
`;
