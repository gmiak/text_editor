const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
  app.use(
    '/document',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
  app.use(
    '/document/create',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
};