

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname+'/dist',
      filename: 'fsutil-lib.js'
    },
    module: {
      rules: [{ 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        }]
      }
      // resolve: {
      //   root: './src',
      //   extensions: ['', '.js']
      // }
  };