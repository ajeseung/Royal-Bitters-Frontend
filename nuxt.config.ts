import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  extends: [
    "./account/nuxt.config.ts",
    "./kakaoAuthentication/nuxt.config.ts",
    "./home/nuxt.config.ts",
    "./wine/nuxt.config.ts",
    "./whisky/nuxt.config.ts",
    "./beer/nuxt.config.ts",
    "./cart/nuxt.config.ts",
  ],

  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.min.css"],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },

  components: [
    {
      path: "~/navigationBar",
      extensions: ["vue"],
    },
  ],

  modules: [
    "vuetify-nuxt-module",
    "@pinia/nuxt",
    "~/home/index.ts",
    "~/account/index.ts",
    "~/kakaoAuthentication/index.ts",
    "~/wine/index.ts",
    "~/whisky/index.ts",
    "~/beer/index.ts",
    "~/cart/index.ts",
  ],

  imports: {
    dirs: ["./stores"],
  },

  runtimeConfig: {
    public: {
      MAIN_API_URL: process.env.VUE_APP_BASE_URL,
      AI_BASE_URL: process.env.VUE_APP_AI_BASE_URL,
    },
  },
});
