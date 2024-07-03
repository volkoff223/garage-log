import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

export const load: PageServerLoad = async ({ params }) => {
  const vehicle = await pb.collection("vehicles").getOne(params.slug, {});
  const maintLog = await pb.collection("logs").getFullList({
    filter: `vehicle="${params.slug}"`,
  });

  if (vehicle) {
    return { vehicle, maintLog };
  }

  error(404, "Not found");
};
