module.exports = {
  // the main entry of our app
  entry: [
    './src/index.js',
    './src/auth/index.js'
  ],
  // output configuration
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
  // how modules should be transformed
  module: {
    loaders: [
      // process *.vue files using vue-loader
      { test: /\.vue$/,
        loader: 'vue-loader'
      },
      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
  // configure babel-loader.
  // this also applies to the JavaScript inside *.vue files
  // I have moved this to .babelrc file outside of webpack.config.js
}
