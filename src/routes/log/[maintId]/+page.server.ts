import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

let vehicleId = "";

export const load: PageServerLoad = async ({ params }) => {
  const log = await pb.collection("logs").getOne(params.maintId);
  vehicleId = log.vehicle;
  if (log) {
    return log;
  }

  error(404, "Not found");
};

import type { Actions } from "./$types";

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();
    const logUpdate = {
      title: data.get("title"),
      description: data.get("description"),
    };
    const record = await pb
      .collection("logs")
      .update(params.maintId, logUpdate);
    throw redirect(303, `/${record.vehicle}`);
  },
  delete: async ({ params }) => {
    const record = await pb.collection("logs").delete(params.maintId);
    throw redirect(303, `/${vehicleId}`);
  },
} satisfies Actions;
