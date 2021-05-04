//import html from './register.html';
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
//const WebpackDevServer = require("webpack-dev-server");
const { Template } = require("webpack");


module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },



  plugins: [
    new CopyWebpackPlugin([
      { from: "./src/index.html", to: "index.html" },
      { from: "./src/style.css", to: "style.css"},
    
    ]),

  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};
