const HTtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HTtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
}
