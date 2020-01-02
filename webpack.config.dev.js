var path = require('path');

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              // If not set to true then it will analyse all typescript files (even ones not included in the build process),
              // which will lead to problems with Ahead Of Time compilation
              transpileOnly: true
            }
          },
          { loader: 'angular2-template-loader' },
          { loader: 'angular-router-loader' }
        ]
      }
    ]
  },
  devServer: {
    // Allows URLs without the #
    historyApiFallback: true,
    stats: 'minimal'
  }
});
