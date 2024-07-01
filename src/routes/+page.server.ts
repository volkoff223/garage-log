import type { PageServerLoad } from "./$types";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

export const load: PageServerLoad = async ({ locals }) => {
  const vehicles = await pb.collection("vehicles").getList(1, 50, {
    //! This needs to check for the active user
    filter: "user='v3vcs7o457s3cr4'",
  });
  return { vehicles };
};
