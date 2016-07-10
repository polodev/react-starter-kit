var path = require('path');
var config = {
  entry: path.resolve(__dirname, './main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,

      // There is not need to run the loader through
      // vendors
      exclude: ["node_modules_dir"],
      loader: 'babel',
      query: {
         presets: ['es2015', 'react']
      }
    }]
  }
};

module.exports = config;
