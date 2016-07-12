var config = {
   entry: [
    'babel-polyfill',
     './main.js'
   ],

   output: {
      path:'./',
      filename: 'index.js',
   },
   devtool: 'source-map',
   devServer: {
      inline: true,
      port: 8080
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
         }
      ]
   },
   debug : true
}

module.exports = config;
