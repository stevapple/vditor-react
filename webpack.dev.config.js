const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './demo/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dmeo'),
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
    contentBase: './demo'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'demo/index.html'
    })
  ],
};