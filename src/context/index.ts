import { StartStandaloneServerOptions } from "@apollo/server/src/standalone";
import { GraphQLError } from "graphql";
import asana, { Client } from "asana";
import { AllLoaders, getLoaders } from "dataloaders";
import { User } from "types";

export type Context = {
  asana: Client;
  me: User;
  apiToken: string;
} & AllLoaders;

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
    const allLoaders = getLoaders(apiToken);

    const me = await client.users.me();

    return {
      asana: client,
      me,
      apiToken,
      ...allLoaders,
    };
  };
