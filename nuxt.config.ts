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
    '@vite-pwa/nuxt'
  ],
  app: {
    head: {
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

  }
})
