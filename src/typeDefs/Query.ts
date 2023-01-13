export const Query = `#graphql

  type Query {
      greeting: String!
      
      # User queries
      me: User!
      user(id: ID!): User
      
      # Workspace queries
      workspace(id: ID!): Workspace
      
      tag(id: ID!): Tag!
      
      task(id: ID!): Task!
      
  }
`;
