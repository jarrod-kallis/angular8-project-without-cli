var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/main.ts',
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.css$/,
        loaders: ['raw-loader'] // No tranformation needed for CSS - the browser understands it as is
      }
    ],
    // Expression Context Critical: false = Avoid some nasty errors ???
    exprContextCritical: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Uses the existing index.html as a template (copies it to the dist folder & adds the imports of the created bundle files)
      template: 'src/index.html'
    })
  ]
};
