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
};
