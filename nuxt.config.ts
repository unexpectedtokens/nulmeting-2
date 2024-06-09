// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
  imports: { dirs: ["store/**"] },
  runtimeConfig: {
    public: {
      api_key: process.env.API_TOKEN,
      api_url: process.env.API_URL,
    },
  },
});
