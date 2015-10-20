var path = require('path');
var webpack = require('webpack');

var config = {
  devtool : 'eval-source-map',
  entry: [
    './app/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/generated'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    root: [ path.join(__dirname, 'app/') ],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=0' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './css'), },
    ]
  },
};

module.exports = config;
