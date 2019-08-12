const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: resolve(__dirname, '../src/'),
  entry: {
    main: resolve(__dirname, '../src/Root.js'),
  },
  output: {
    path: resolve(__dirname, '../dist/'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
    chunkFilename: '[name].[id].[hash].js'
  },
  resolve: {
    modules: [resolve(__dirname, '../node_modules/')],
    alias: {
      // '~': resolve(__dirname, "../src/"),
      // 'assets': resolve(__dirname, "../assets/"),
      // 'less': resolve(__dirname, "../assets/less"),
      // 'img': resolve(__dirname, "../assets/img"),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/esm',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // "modules": false
                    // targets: {
                    //   esmodules: true
                    // }
                  }
                    // {
                  //   "modules": false
                  // }
                ]
              ],
              cwd: resolve(__dirname, '../'),
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use:[
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.(png|ico|jpg)$/,
        use: 'url-loader'
      },
      {
        test   : /\.(ttf|eot|svg|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'file-loader',
        // loader : 'file-loader?name=fonts/[name].[ext]'
        options: {
          outputPath: 'fonts',
          name: '[name].[ext]',
          // publicPath: (url, resourcePath, context) => {
          //   if (/fonts/.test(resourcePath)) {
          //     return `~/es/fonts/${url}`;
          //   }

          //   console.log(url)
          //   return url
          //   // return `public_path/${url}`;
          // },
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false
  },
}
