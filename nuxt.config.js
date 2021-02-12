export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tweetclone',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],
  
  axios: {
    baseURL: 'http://localhost:3333',
  },

    auth: {
        strategies: {
          local: {
            endpoints: {
              login: {url: 'login', method: 'post', propertyName: 'data.token'},
              user: {url: 'account/me', method: 'get', propertyName: 'data'},
              logout: false
            },
              // tokenType: '',
          }
        }
    },
  
  // auth: {
  //     strategies: {
  //       local: {
  //         token: {
  //           property: 'data.token',
  //         },
  //         user: {
  //           property: 'data',
  //         },
  //         endpoints: {
  //           login: { url:'/login', method: 'post'},
  //           user: {url: '/me', method: 'get'},
  //           logout: false
  //         }
  //       }
  //     }
  // },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
