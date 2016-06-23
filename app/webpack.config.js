const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: '../server/public',
    filename: 'scripts/bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
  			test: /\.html$/,
  			loader: 'html',
  		},
      {
  			test: /\.scss$/,
  			loader: 'style!css?sourceMap!sass?sourceMap'
  		},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlPlugin({template: './src/index.html'})
    // new ExtractTextPlugin('styles/bundle.css')
  ],
  sassLoader: {
    includePaths: ['./src/styles/includes']
	}
};
