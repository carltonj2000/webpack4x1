const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index_h.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_h.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000
            }
          }
        ]
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({template: './src/index_h.html'})
  ]
};
