const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvPlugin = require("dotenv-webpack");

module.exports = (env) => ({
  mode: env.production ?
    "production" :
    "development",
  entry: "./src/index.tsx",
  devtool: env.production ?
    false :
    "source-map",
  output: {
    path: env.production ?
      path.join(__dirname, "/build/prod") :
      path.join(__dirname, "/build/dev"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/",
  },
  plugins: [
    new DotenvPlugin(),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      favicon: "./src/assets/images/favicon/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.(pdf|docx)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/docs/[hash][ext][query]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      src: path.join(__dirname, "/src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", "..."],
  },
  devServer: {
    host: "127.0.0.1",
    port: 80,
    hot: true,
    historyApiFallback: true,
    allowedHosts: "all",
  },
});
