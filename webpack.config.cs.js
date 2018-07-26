const path = require("path");

module.exports = {
  mode: "development",
  entry: { a: "./src/a.js", b: "./src/b.js" },
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: { chunks: "all", minSize: 0 }
  }
};
