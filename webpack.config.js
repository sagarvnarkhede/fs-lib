
// webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fsCore.js',
    library: 'fsCore'
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    echarts: {
      commonjs: 'echarts',
      commonjs2: 'echarts',
      amd: 'echarts',
      root: 'echarts'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader','sass-loader']
          })
      }
    ]
  },
  plugins: [ 
    new ExtractTextPlugin({
      filename: 'fsCore.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  optimization: {
    // namedModules: true, // NamedModulesPlugin()
    // splitChunks: { // CommonsChunkPlugin()
    //     name: 'vendor',
    //     minChunks: 2
    // },
    // noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    concatenateModules: true //ModuleConcatenationPlugin
}
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 8080,
  //   contentBase: './',
  //   hot: false,
  //   proxy: {
      
  //   }
  // }
};;