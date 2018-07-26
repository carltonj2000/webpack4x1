const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index_u.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_u.js"
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
  }
};
