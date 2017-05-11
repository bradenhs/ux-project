var path = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve('out'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'out'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin(),
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.tsx?$/, use: 'awesome-typescript-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
}
