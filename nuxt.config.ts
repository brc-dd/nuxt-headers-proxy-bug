export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  routeRules: {
    '/echo/**': { proxy: 'https://postman-echo.com/**' }
  }
})
