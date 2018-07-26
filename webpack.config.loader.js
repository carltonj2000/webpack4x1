const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index_l.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_l.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
