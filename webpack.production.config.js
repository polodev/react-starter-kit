var path = require('path');
var config = {
   entry: [
    'babel-polyfill',
    './src/style/base.less',
   './src/main.js'
   ],
  output: {
    path: path.resolve(__dirname, './src/dist'),
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
