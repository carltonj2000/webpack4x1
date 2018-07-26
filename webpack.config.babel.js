const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index_b.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_b.js"
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
      },
      {
        note: "did not do any processing with this loader",
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
