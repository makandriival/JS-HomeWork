const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: '/Users/andriimakarov/Documents/GitHub/JS-HomeWork/js-hw-9/Webpack/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  }
};
