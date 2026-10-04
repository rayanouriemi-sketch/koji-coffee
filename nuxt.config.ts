export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Kōji Coffee — Café de spécialité',
      meta: [
        { name: 'description', content: "Concept de site e-commerce pour un torréfacteur de café de spécialité (marque fictive)." },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@500;700;800&family=Inter:wght@400;500;700&display=swap' },
      ],
    },
  },
})
