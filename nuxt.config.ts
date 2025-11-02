import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  css: ['./app/assets/css/main.css'],
  app: {
    baseURL: '/ArtGallery/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ArtGallery/villager.ico' }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
