import { resolve } from "path";
export default {
  base:"./",
  root: resolve(__dirname, "./"),
  publicDir: "./public",
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    outDir: "dist",
  },
};