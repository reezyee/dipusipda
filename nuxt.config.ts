export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-03-30',
  nitro: {
    preset: "vercel",
  },
  app: {
    baseURL: "/", // Pastikan baseURL tidak kosong
  }
});
