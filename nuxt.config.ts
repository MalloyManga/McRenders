import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  ssr: false,
  vite: {
    build: {
      assetsInlineLimit: 8192,
    },
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: '/McRenders/',
    head: {
      title: 'McRenders',
      link: [
        { rel: 'icon', href: '/McRenders/villager.ico' }
      ],
    }
  }
})
