const path = require('path')

const pageResolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    // 路径别名
    alias: {
      '@@': pageResolve('.'),
      '@': pageResolve('src'),
      '@view': pageResolve('src/views'),
      '@img': pageResolve('src/assets/images'),
      '@comp': pageResolve('src/components'),
    },
  },
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
  devServer: {
    // 服务端口
    port: 3080,
    // 服务请求头允许跨域
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
