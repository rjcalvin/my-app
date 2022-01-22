require('dotenv').config()
const { merge } = require('webpack-merge');
const baseConfig = require('./base.config.js');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        use: [{
            loader: 'url-loadr',
            options: {
                limit: 100000,
            }
        }]
        },
      {
        test: /\.less$/,
        use: [
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, 
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'less-loader', 
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
    new ProgressBarPlugin()
  ]
  
});