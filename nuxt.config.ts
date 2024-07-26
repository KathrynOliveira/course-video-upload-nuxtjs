import { client } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{ path: "~/shared/icons", prefix: "Icon" }, "~/components"],
  alias: {
    css: '/<rootDir>/assets/css',
    utils: '/<rootDir>/server/utils'
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      // title: "Meu Site", title no navegador
    }
    // baseURL: process.env.BASE_URL || "http://localhost:3000/"
  },
  css: ["@/assets/css/main.css"],
  // modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxtjs/i18n"],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", [
    '@nuxtjs/i18n',
    {
      vueI18n: "./i18n"
    }
  ], "@nuxt/ui", "nuxt-auth-utils"],
  pinia: {
    storesDirs: ['./stores/**']
  },
  // routeRules: {
  //   '/auth/**': { ssr: false }, // Example for disabling SSR on auth routes
  // },
  runtimeConfig: {
    oauth: {
      Google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      },
    },
  },
});