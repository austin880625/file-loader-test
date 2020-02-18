const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: 'img/[name].[ext]',
              publicPath: '/wp-content/themes/whatever/dist/',
            },
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: '/wp-content/themes/whatever/dist/',
            },
          }
        ]
      },
    ]
  },

};