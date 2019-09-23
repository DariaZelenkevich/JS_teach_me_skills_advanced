const webpack = require("webpack");
const merge = require("webpack-merge");
const commonWebpack = require("./webpack.common");

module.exports = merge(commonWebpack, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3030,
    open: true,
    hot: true,
    contentBase: './',
    proxy: {
      '/data': {
          target: 'https://api.openweathermap.org',
          changeOrigin: true
      },
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
