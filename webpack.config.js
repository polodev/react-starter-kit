var path = require('path');
var config = {
   entry: [
    'babel-polyfill',
    './src/style/base.less',
   './src/main.js'
   ],

   output: {
    path: path.join(__dirname, '/src/'),
    filename: 'index.js',
   },
   devtool: 'source-map',

  devServer: {
    contentBase: "./src",
    port : 8080
  },

   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
          test: /\.less$/,
          loader: "style!css!postcss-loader!less"
         }
      ]
   },
   debug : true
}

module.exports = config;
