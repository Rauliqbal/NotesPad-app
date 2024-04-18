// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vite-pwa/nuxt',
    'nuxt-headlessui'
  ],
  app: {
    head: {
      link: [
        {href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@400;500;600;700&display=swap"},
        {rel: "preconnect", href:'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: "https://fonts.gstatic.com" }
      ],
      script: [
        { src: 'https://unpkg.com/akar-icons-fonts' }
      ]
    }
  },
  pwa: {
    manifest: {
      name: 'NotesPad : Tasks & Reminder',
      short_name: 'NotesPad',
      description: 'NotesPad - The solution to remembering your notes',
      theme_color: '#B2DAC6',
    },
  },
  
})
