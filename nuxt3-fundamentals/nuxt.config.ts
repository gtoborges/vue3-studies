// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@pinia/nuxt", 
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      }
    ],
  ],
  imports: {
    dirs: ["stores"]
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  routeRules: {
    "/spa": { ssr: false }, // renders only on client-side
    "/static": { static: true }, // static after generated on first visit
    "/swr": { swr: true }, // page generated on demand, revalidates in background, cached until API response changes (stale while revalidate)
  }
})
