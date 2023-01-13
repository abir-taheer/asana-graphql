import { Resolver } from "types";

export type GreetingQueryArgs = {
  name: string;
};

export const greeting: Resolver<null, GreetingQueryArgs> = (parent, { name }) =>
  ["Hello", name].filter(Boolean).join(" ") + "!";
