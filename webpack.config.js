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
        test: /\.svg$/,
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
        test: /\.svg$/,
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