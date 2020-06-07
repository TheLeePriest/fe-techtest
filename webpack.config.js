const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            ignore: ['node_modules'],
            presets: ['@babel/preset-react']
          },
        },
      },
      {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};
