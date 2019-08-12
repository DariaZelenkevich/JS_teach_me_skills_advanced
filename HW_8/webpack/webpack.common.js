const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "..", "output")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|webp|gif|svg)$/,
        use: "file-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Project",
      template: "index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
