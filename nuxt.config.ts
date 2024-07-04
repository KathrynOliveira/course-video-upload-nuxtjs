// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{ path: "~/shared/icons", prefix: "Icon"}, "~/components"],
  alias: {
    css: '/<rootDir>/assets/css'
  },
  app: {
    // baseURL: process.env.BASE_URL || "http://localhost:3000/"
  },
  css: ["@/assets/css/main.css"],
  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ['./stores/**']
  }
})