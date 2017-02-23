module.exports = {
  // main entry for app
  entry: [
    './src/index.js',
    './src/auth/index.js'
  ],
  // output
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },

  module: {
    loaders: [
      { test: /\.vue$/,
        loader: 'vue-loader'
      },
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
