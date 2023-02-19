// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    'shaka-player/dist/controls.css',
    '@/assets/main.css'
  ],
  build: {
    transpile: [
      'vuetify',
      '@sidebase/nuxt-auth',
    ],
  },
});
