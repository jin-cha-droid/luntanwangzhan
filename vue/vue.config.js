const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  parallel: false,
  // publicPath: './',
  transpileDependencies: true,
  devServer: {
    port: 8080
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "管理系统";
        return args;
      })
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      });
  },
})
