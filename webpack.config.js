const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: {
    math: path.join(__dirname, 'examples/mathematic/index.js'),
    regex: path.join(__dirname, 'examples/regex/index.js')
  },
  output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    // 主页
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './examples/index.html',
      chunks: []
    }),
    // mathematic页面
    new HtmlWebpackPlugin({
      filename: './mathematic/index.html',
      template: './examples/mathematic/index.html',
      chunks: ['math']
    }),
    // regex页面
    new HtmlWebpackPlugin({
      filename: './regex/index.html',
      template: './examples/regex/index.html',
      chunks: ['regex']
    })
  ]
}
module.exports = config