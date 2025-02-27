import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  googleFonts: {
    families: {
      Poppins: [400, 700],
      Domine: [400, 700]
    }
  },

  modules: ['@nuxt/image', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@vee-validate/nuxt'],
})