const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // 配置 devServer
  devServer: {
    host: 'localhost', // url
    port: 8080, // 端口号
    open: true, // 自动打开浏览器 true：打开 ;false:不打开
    proxy: { // 配置跨域
      "/api": {
        target: "http://localhost:8080", // 代理地址
        changeOrigin: true, // 设置跨域
        secure: false, // true：https访问，false：http访问
        pathRewrite: { // 重写请求路径别名
          "^/api": "/"
        },
      }
    },
  }
})
