import { redirect } from "@sveltejs/kit";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

import type { Actions } from "./$types";

export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const log = {
      title: data.get("title"),
      description: data.get("description"),
      vehicle: params.slug,
    };
    console.log(log);
    const record = await pb.collection("logs").create(log);
    throw redirect(303, `/${params.slug}`);
  },
} satisfies Actions;
