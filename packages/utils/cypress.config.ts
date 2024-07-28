import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 769,
  viewportHeight: 600,
  component: {
    specPattern: "src/**/*.spec.{ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
