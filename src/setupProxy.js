const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api/dadata',
    createProxyMiddleware({
      target: 'https://suggestions.dadata.ru',
      changeOrigin: true,
      pathRewrite: { '^/api/dadata': '' },
      timeout: 10000,
      proxyTimeout: 10000
    })
  );

  app.use(
    '/api/openweathermap',
    createProxyMiddleware({
      target: 'https://api.openweathermap.org',
      changeOrigin: true,
      pathRewrite: { '^/api/openweathermap': '' },
      timeout: 10000,
      proxyTimeout: 10000
    })
  )
}