import type { PageServerLoad } from "./$types";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

export const load: PageServerLoad = async ({ locals }) => {
  const vehicles = await pb.collection("vehicles").getList(1, 50, {
    filter: `user="${locals.id}"`,
  });
  return { vehicles };
};
