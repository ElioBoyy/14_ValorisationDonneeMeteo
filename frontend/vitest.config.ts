import { defineVitestConfig } from "@nuxt/test-utils/config";
import { fileURLToPath } from "url";

export default defineVitestConfig({
    test: {
        environment: "jsdom",
        globals: true,
        include: ["tests/unit/**/*.test.ts", "tests/integration/**/*.test.ts"],
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./app", import.meta.url)),
        },
    },
});
