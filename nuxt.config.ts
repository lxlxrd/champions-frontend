export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

   runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000', // ou ton backend réel
    },
  },


  devtools: { enabled: true },

  ssr: false,
  
  devServer: {
    host: "localhost",
  },

  // vite: { plugins: [tailwindcss()] },

  css: [
    "~/assets/css/main.css", // <-- ajoute cette ligne ici
    "font-awesome/css/font-awesome.min.css", // <-- ajoute cette ligne ici
  ],

  app: {
    head: {
      title: "Champions-Soccer", // default fallback
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          key: "description",
          name: "description",
          content: "Champions-soccer application",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      htmlAttrs: {
        lang: "en",
      },

      // bootstrap css CDN link
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        },

        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },

        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css",
        },

        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
      ],

      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },

        {
          src: "https://code.jquery.com/jquery-3.7.1.min.js",
          type: "text/javascript",
        },

        //
      ],
    },
  },

  modules: ["@qirolab/nuxt-sanctum-authentication", 
        '@pinia/nuxt',  
  ],

  laravelSanctum: {
    // Replace with your Laravel API URL
    apiUrl: "http://localhost:8000",
    authMode: "cookie",

    sanctumEndpoints: {
      /**
       * The endpoint to request a new CSRF token.
       * @default '/sanctum/csrf-cookie'
       */
      csrf: "/sanctum/csrf-cookie",

      /**
       * The endpoint to send user credentials to authenticate.
       * @default '/login'
       */
      login: "/login",

      /**
       * The endpoint to destroy current user session.
       * @default '/logout'
       */
      logout: "/logout",

      /**
       * The endpoint to fetch current user data.
       * @default '/api/user'
       */
      user: "/api/user",
    },

    redirect: {
      /**
       * Determines whether to keep the requested route when redirecting after login.
       * @default false
       */
      enableIntendedRedirect: false,

      /**
       * Path to redirect to when access requires user authentication.
       * If set to false, a 403 error is triggered.
       * @default '/login'
       */
      loginPath: "/SignIn",

      /**
       * URL to redirect to when guest access is required (user must not be authenticated).
       * If set to false, the plugin will throw an 403 error.
       * @default '/'
       */
      guestOnlyRedirect: "/user-dashboard",

      /**
       * URL to redirect to after a successful login.
       * If set to false, no redirection occurs.
       * @default '/'
       */
      redirectToAfterLogin: "/",

      /**
       * URL to redirect to after logout.
       * If set to false, no redirection occurs.
       * @default '/'
       */
      redirectToAfterLogout: "/",
    },
  },
});
