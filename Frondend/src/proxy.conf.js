const PROXY_CONFIG = [
  {
    context: [
      "/api/v1/supalogic",
    ],
    target: "https://localhost:7275/",
    secure: false,
    changeOrigin: true,
  }
]

module.exports = PROXY_CONFIG;
