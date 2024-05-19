const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Assuming your entry point is src/index.js
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'bundle.js', // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Add other loaders as needed (e.g., for CSS, images)
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
