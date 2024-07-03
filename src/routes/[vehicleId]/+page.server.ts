import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

export const load: PageServerLoad = async ({ params }) => {
  const vehicle = await pb.collection("vehicles").getOne(params.vehicleId, {});
  const maintLog = await pb.collection("logs").getFullList({
    filter: `vehicle="${params.vehicleId}"`,
  });

  if (vehicle) {
    return { vehicle, maintLog };
  }

  error(404, "Not found");
};
