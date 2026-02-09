const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: `./src/index.js`,
  },
  target: "web",
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
    hashFunction: "xxhash64",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "static"),
      watch: true,
    },
    hot: true,
    host: "localhost",
    port: 8080,
    watchFiles: {
      paths: ["src/**/*", "static/**/*"],
      options: {
        usePolling: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
