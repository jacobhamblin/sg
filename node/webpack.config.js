var path = require('path');
var webpack = require('webpack');

var config = {
  devtool : 'eval-source-map',

  entry: [
    './app/index.js',
    './styles/main.scss',
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
      {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/,
        query: { presets: ['es2015', 'react', 'stage-0'] }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
    ]
  },
  sassLoader: {
    includePaths: [path.join(__dirname, "styles")]
  }
};

module.exports = config;
