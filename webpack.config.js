const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/'],
  output: {
    path: 'build/',
    filename: 'app.js',
    publicPath: 'build/'
  },
  devServer: {
    inline: true
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
