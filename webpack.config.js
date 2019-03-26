const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [{
          loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
        }, {
          loader: path.resolve(__dirname, './loaders/replaceLoaderAsync.js'),
          options: {
            name: 'lee'
          }
        }]
      }
    ]
  }
}