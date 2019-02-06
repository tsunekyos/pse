const path = require('path');

module.exports = {
  // watch: true,
  // mode: 'development',
  entry: './src/script/index.js',
  output: {
    path: path.resolve(__dirname, 'dest/asset/script'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        loader: 'webpack-modernizr-loader',
        test: /\.modernizrrc\.js$/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      // You can add comment "Please do not delete this file" in this file
      modernizr$: path.resolve(__dirname, '.modernizrrc.js'),
    },
  },
};
