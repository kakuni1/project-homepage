import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  base: process.env.GITHUB_ACTIONS ? "/project-homepage/" : "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
