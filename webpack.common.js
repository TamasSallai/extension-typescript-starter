const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
  const manifest = env.browser === 'chrome' ? 'chrome' : 'firefox'
  return {
    entry: {
      background: path.resolve('src/background.ts'),
      content: path.resolve('src/content.ts'),
      popup: path.resolve('src/popup/popup.tsx'),
    },
    module: {
      rules: [
        {
          use: 'ts-loader',
          test: /\.tsx?$/, // match all .ts and .tsx files
          exclude: /node_modules/,
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/i, // match all .css files
        },
        {
          type: 'assets/resource',
          test: /\.(jpg|jpeg|png|svg|woff|woff2|eot|ttf)$/, // match all file image, svg and font file extension
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, `src/static/${manifest}.json`),
            to: path.resolve(__dirname, 'dist/manifest.json'),
          },
          {
            from: path.resolve(__dirname, 'src/static/icon.png'),
            to: path.resolve('dist'),
          },
        ],
      }),
      new HtmlPlugin({
        title: 'Fifty Extension',
        filename: 'popup.html',
        chunk: ['popup'],
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
}
