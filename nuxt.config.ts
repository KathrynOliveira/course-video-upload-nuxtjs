// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{ path: "~/shared/icons", prefix: "Icon"}, "~/components"],
  alias: {
    css: '/<rootDir>/assets/css',
    utils: '/<rootDir>/server/utils'
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in"},
    // baseURL: process.env.BASE_URL || "http://localhost:3000/"
  },
  css: ["@/assets/css/main.css"],
  // modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxtjs/i18n"],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", [
    '@nuxtjs/i18n',
    {
      vueI18n: "./i18n"
    }
  ], "@nuxt/ui"],
  pinia: {
    storesDirs: ['./stores/**']
  }
})