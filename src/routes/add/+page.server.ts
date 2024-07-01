import { redirect } from "@sveltejs/kit";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

import type { Actions } from "./$types";

export const actions = {
  manualEntry: async ({ request, locals }) => {
    const data = await request.formData();
    const vehicle = {
      year: data.get("year"),
      make: data.get("make"),
      model: data.get("model"),
      user: locals.id,
    };

    const record = await pb.collection("vehicles").create(vehicle);
    throw redirect(303, `/${record.id}`);
  },
} satisfies Actions;
