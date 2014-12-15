var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: './entry',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new ngAnnotatePlugin({
      add: true
    })
  ]
}
