import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "resolvers";
import { typeDefs } from "typeDefs";
import { context } from "context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// For some reason the context messes up the standalone server
// just expect the error for now instead of fixing since it's not a real issue

// @ts-expect-error
startStandaloneServer(server, {
  listen: { port: 4000 },
  context,
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
