export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Investment Calculator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/RangeSlider.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
    // https://github.com/nuxt-community/robots-module#readme
    '@nuxtjs/robots',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Firebase Options : https://firebase.nuxtjs.org/guide/options
  firebase: {
    config: {
      apiKey: 'AIzaSyAKiWRQOBVZp2hTfz_RzK2TsbeE8vxRejA',
      authDomain: 'investmentcalculator-deb92.firebaseapp.com',
      projectId: 'investmentcalculator-deb92',
      storageBucket: 'investmentcalculator-deb92.appspot.com',
      messagingSenderId: '859788277327',
      appId: '1:859788277327:web:b26a7f63f72c7e64d3dc3a',
      measurementId: 'G-CNWKH0ZJ21',
    },
    services: {
      analytics: true,
    },
    onFirebaseHosting: true,
    lazy: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
