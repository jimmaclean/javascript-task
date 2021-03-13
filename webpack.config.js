const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin( {
      title: 'Acme Journeys Task',
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
    } ),
  ],

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [ path.resolve(__dirname, 'src') ],
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    open: false,
    host: 'localhost',
    hot: true,
  },
};
