const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index_hjc.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_hjc.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index_hjc.html" }),
    new MiniCssExtractPlugin()
  ]
};
