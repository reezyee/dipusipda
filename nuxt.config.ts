export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-03-30',
  nitro: {
    preset: "netlify",
  },
  app: {
    baseURL: "/", // Pastikan baseURL tidak kosong
  }
});
