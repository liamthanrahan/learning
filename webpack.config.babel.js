import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import HTMLWebpackTemplate from 'html-webpack-template'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default env => {
  return {
    devtool: 'source-map',
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules'),
      ],
    },
    resolveLoader: {
      modules: [path.join(__dirname, 'node_modules')],
    },
    entry: {
      main: ['babel-polyfill', './src/index.js'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'react'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HTMLWebpackPlugin({
        template: HTMLWebpackTemplate,
        inject: false,
        title: "Liam's Learning",
        mobile: true,
        filename: 'index.html',
      }),
    ],
  }
}
