// @ts-check

import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  { ignores: [".react-router", ".intlayer"] },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  perfectionist.configs["recommended-alphabetical"],
  {
    plugins: { prettier },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              importNames: ["Link", "useNavigate"],
              name: "react-router",
            },
          ],
        },
      ],
    },
  },
);
