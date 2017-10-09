//var path = require('path')
//import webpack from 'webpack'
import path from 'path'
import webpack from 'webpack';

export default {
  devtools:'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders:['react-hot','babel']
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /(node_modules)\/react-toolbox/
      },
      {
        test    : /(\.scss|\.css)$/,
        include : /(node_modules)\/react-toolbox/,
        loaders : [
                    require.resolve('style-loader'),
                    require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    require.resolve('sass-loader') + '?sourceMap'
                  ]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
         test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  }
}
