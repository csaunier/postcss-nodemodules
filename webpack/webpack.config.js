const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: [
    './src/index.jsx',
      './node_modules/normalize.css/normalize.css'
  ],
  output: {
    filename: 'website.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          rootMode: "upward",
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]"
              },
              importLoaders: 1
            },
          },
          {
            loader: "postcss-loader",
          },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/public/index.html",
    }),
  ],
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, '../', 'src')],
    extensions: ["*", ".js", ".jsx"],
  }
};