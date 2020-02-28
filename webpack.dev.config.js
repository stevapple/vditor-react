const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './test/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './test'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: './test'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'test/index.html'
    })
  ],
};