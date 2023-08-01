// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  /* css:[
    '/assets/css/main.css',
    '/assets/css/tailwind.css',
  ], */
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  build: {
		transpile: ["primevue"]
	},
})
