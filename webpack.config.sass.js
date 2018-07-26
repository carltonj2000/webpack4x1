const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index_s.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_s.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
