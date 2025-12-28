import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  preview: {
    allowedHosts: ["uploader.sprunkifamily.com"],
  },
  server: { port: 7896, host: true },
});
