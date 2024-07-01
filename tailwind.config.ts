import { join } from "path";
import type { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    forms,
    skeleton({
      themes: {
        preset: [
          {
            name: "wintry",
            enhancements: true,
          },
          {
            name: "modern",
            enhancements: true,
          },
          {
            name: "rocket",
            enhancements: true,
          },
        ],
      },
    }),
  ],
} satisfies Config;
