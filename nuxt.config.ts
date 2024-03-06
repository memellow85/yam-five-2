// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'app/',
  css: ['~/assets/scss/main.scss'],
  typescript: {
    shim: false,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport:
        'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height',
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@nuxtjs/eslint-module',
  ],
})
