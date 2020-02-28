const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CssExtractor = require('mini-css-extract-plugin');

module.exports = [{
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: 'vditor-react.min.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2'
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
        use: [CssExtractor.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  externals: [
    nodeExternals()
  ]
},{
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, './dist'),
    library: 'Vditor',
    libraryTarget: 'assign'
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
        use: [CssExtractor.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CssExtractor({
      filename: 'index.min.css'
    }),
  ],
  externals: {
    react: 'react'
  }
}];