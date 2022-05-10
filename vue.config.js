const path = require('path')

console.log("path:", path)

module.exports = {
  // baseUrl: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
