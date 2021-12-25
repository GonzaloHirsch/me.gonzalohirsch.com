const meta_description = "I'm an Argentina-based Software Engineering Student and Full-Stack Developer focused on developing clean, user-friendly, and fast experiences.";
const meta_title = "Gonzalo Hirsch | Software Engineer and Freelancer";
const meta_image = "https://me.gonzalohirsch.com/share.jpeg"
const meta_url = "https://me.gonzalohirsch.com/"

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: meta_title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta_description },
      { hid: 'og:title', property: 'og:title', content: meta_title },
      { hid: 'og:description', property: 'og:description', content: meta_description },
      { hid: 'og:image', property: 'og:image', content: meta_image },
      { hid: 'og:url', property: 'og:url', content: meta_url },
      { hid: 'og:type', property: 'og:type', content: "website" },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary" },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        json: {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": meta_title,
          "url": "https:/me.gonzalohirsch.com/"
        },
        type: 'application/ld+json'
      },
      {
        json: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": meta_title,
          "description": meta_description,
          "publisher": {
            "@type": "Person",
            "jobTitle": "Software Engineer",
            "name": "Gonzalo Hirsch",
            "url": "https://gonzalohirsch.com/"
          },
          "license": "http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US"
        },
        type: 'application/ld+json'
      },
      {
        json: {
          "@context": "http://www.schema.org",
          "@type": "Person",
          "@id": "https://me.gonzalohirsch.com/",
          "name": "Gonzalo Hirsch",
          "alternateName": "Gonzalo Hirsch",
          "nationality": "Argentinian",
          "alumniOf": [
            {
              "@type": "CollegeOrUniversity",
              "name": "Instituto Tecnológico de Buenos Aires",
              "sameAs": "http://itba.edu.ar/"
            }
          ],
          "gender": "Male",
          "jobTitle": "Software Engineer",
          "worksFor": [
            {
              "@type": "Organization",
              "name": "Toptal",
              "sameAs": [
                "https://www.toptal.com/",
                "https://www.linkedin.com/company/toptal",
                "https://twitter.com/toptal",
                "https://www.facebook.com/toptal",
                "https://www.instagram.com/toptal/"
              ]
            }
          ],
          "url": "https://gonzalohirsch.com/",
          "image": "https://gonzalohirsch.com/img/bg.b215cd11.jpg",
          "sameAs": [
            "https://gonzalohirsch.com/",
            "https://github.com/GonzaloHirsch",
            "https://www.linkedin.com/in/gonzalo-hirsch/",
            "https://www.instagram.com/gonzalohirsch/?hl=en",
            "https://www.toptal.com/resume/gonzalo-hirsch"
          ]
        },
        type: 'application/ld+json'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/font/inter.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
