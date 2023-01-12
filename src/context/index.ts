import { StartStandaloneServerOptions } from "@apollo/server/src/standalone";
import { GraphQLError } from "graphql";
import asana, { Client } from "asana";

export type Context = {
  asana: Client;
};

export const context: StartStandaloneServerOptions<Context>["context"] =
  async ({ req }) => {
    const apiToken = req.headers["authorization"]
      ?.replace(/bearer /i, "")
      .trim();

    if (!apiToken) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }

    const client = asana.Client.create().useAccessToken(apiToken);

    return {
      asana: client,
    };
  };
