import type { Config } from "tailwindcss";

import { heroui } from "@heroui/react";

export default {
  content: ["node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [heroui()],
  theme: {
    extend: {},
  },
} satisfies Config;
