const path = require('path');

const ProvidePlugin = require('webpack/lib/ProvidePlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './index.js'
  },
  devServer: {
    historyApiFallback: true,
    port: 8080
  },
  resolve: {
    alias: {
      Components: path.resolve('./src/components/'),
      Scenes: path.resolve('./src/scenes/'),
      Containers: path.resolve('./src/containers/'),
      Colors: path.resolve('./src/colors/'),
      Hooks: path.resolve('./src/hooks')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

    new ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
      Rx: 'rxjs/Rx',
      bnc: 'bnc'
    }),

    new FaviconsWebpackPlugin('./public/favicon.ico'),

    new Dotenv()
  ]
};
