const webpack = require("webpack");
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/sass/main.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
  }
}