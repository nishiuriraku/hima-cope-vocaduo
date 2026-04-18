const title = 'HIMAWARI KOPPEPAN - VOCADUO 2026';
const description = 'Team Introduction for HIMAWARI KOPPEPAN - VOCADUO 2026';
const url = 'https://hima-cope-vocaduo.netlify.app';
const ogp = url + '/ogp.png';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      title,
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: ogp },
        { property: 'og:imageWidth', content: '1200' },
        { property: 'og:imageHeight', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:siteName', content: title },
        { property: 'og:locale', content: 'ja_JP' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@nishiuriraku' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogp },
        { name: 'twitter:domain', content: url },
      ],
    },
  }
})