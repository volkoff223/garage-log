import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

export const actions = {
  default: async ({ params }) => {
    await pb.collection("vehicles").delete(params.slug);
    throw redirect(303, "/");
  },
} satisfies Actions;

export const load: PageServerLoad = async ({ params }) => {
  const vehicle = await pb.collection("vehicles").getOne(params.slug, {});

  if (vehicle) {
    return vehicle;
  }

  error(404, "Not found");
};
