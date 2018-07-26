const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    first: "./src/one.js",
    second: "./src/two.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
