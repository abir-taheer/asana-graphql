import asana from "asana";
import SimpleResourceList = asana.resources.SimpleResourceList;
import * as Bluebird from "bluebird";

export const getData = async (
  request: Promise<SimpleResourceList> | Bluebird<SimpleResourceList>
) => {
  const { data } = await request;
  return data;
};
