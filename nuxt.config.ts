// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: ['~/assets/css/tailwind.css'],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


  modules: [
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '',
        Sitemap: 'https://www.itgenius.co.th/sitemap.xml'
      }
    ]
  ],

  // Config Environtment
  // runtimeConfig: {
  //   wpsecretkey: process.env.WP_SECRET_KEY || 'SuperSecret123!',  // private runtime config
  //   public: {
  //     wpurlapi: process.env.WP_URL_API || 'https://www.itgenius.co.th/sandbox_api/flutter_news_api' // public runtime config
  //   }
  // },

  runtimeConfig: {
    wpSecretKey:'SuperSecret123!',  // private runtime config
    public: {
      wpUrlAPI:'https://www.itgenius.co.th/sandbox_api/flutter_news_api' // public runtime config
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'demo'
      },
      charset: 'utf-8',
      titleTemplate: '%s | IT Genius Engineering',
      meta: [
        {
          name: 'author',
          content: 'IT Genius Engineering, Thailand'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5'
        }
      ]
    }
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
