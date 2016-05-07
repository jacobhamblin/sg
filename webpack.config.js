const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool : 'eval-source-map',

  entry: [
    './src/js/index.js',
    './src/scss/main.scss',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/bundle'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    root: [ path.join(__dirname, 'dist/') ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/,
        query: { presets: ['es2015', 'react', 'stage-0'] }
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'css-loader!postcss-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!postcss-loader!sass') },
      { test: /\.png$/, loader: 'file?name=bundle/img/[hash].[ext]' },
      { test: /\.jpg$/, loader: 'file?name=bundle/img/[hash].[ext]' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css'),
  ],
  postcss: [ autoprefixer({ browsers: '> 5%'}) ]
};
