var HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const path = require("path");

const config = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    stats: "errors-only",
    historyApiFallback: true
    // open: true
  },
  //devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React - Webpack, Typescript, Reactrouter",
      template: path.resolve(__dirname, "src/index.html")
    })
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/, /\.tsx?$/],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
module.exports = config;
