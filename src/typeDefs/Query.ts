export const Query = `#graphql

  type Query {
      greeting(name: String): String!
      
      # User queries
      me: User!
      user(id: ID!): User
      
      # Workspace queries
      workspace(id: ID!): Workspace
      
      tag(id: ID!): Tag
      
      task(id: ID!): Task
      
      portfolio(id: ID!): Portfolio
      
      project(id: ID!): Project
  }
`;
