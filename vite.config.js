import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  base:"./",
  root: resolve(__dirname, "./"),
  build: {
    emptyOutDir: true,
    outDir: "dist"
  }
});