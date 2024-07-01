import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://garage-log.pockethost.io");

export const load: PageServerLoad = async ({ params }) => {
  const vehicle = await pb.collection("vehicles").getOne(params.slug, {});

  if (vehicle) {
    return vehicle;
  }

  error(404, "Not found");
};

export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const vehicleInfo = {
      year: data.get("year"),
      make: data.get("make"),
      model: data.get("model"),
      cost: data.get("cost"),
      purchaseDate: data.get("purchaseDate"),
      miles: data.get("miles"),
    };

    const record = await pb
      .collection("vehicles")
      .update(params.slug, vehicleInfo);
    throw redirect(303, `/${params.slug}`);
  },
} satisfies Actions;
