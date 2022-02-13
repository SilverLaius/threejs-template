const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/app.ts"),
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    static: path.resolve(__dirname, "public"),
    hot: true,
    devMiddleware: {
      publicPath: "/",
    },
  },
  plugins: [new HtmlWebpackPlugin({ title: "Three.js App" })],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
};
