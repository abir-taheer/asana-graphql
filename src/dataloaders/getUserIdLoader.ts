import { User } from "types";
import { getSimpleLoader } from "dataloaders/getSimpleLoader";

export const getUserIdLoader = (accessToken: string) => {
  return getSimpleLoader<string, User>(accessToken, "users/%s");
};
