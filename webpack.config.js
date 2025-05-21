const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    forms: './src/forms.ts',
    translator: './src/translator.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
    iife: false // Desactiva la envoltura IIFE
  },
  optimization: {
    minimize: false
  }
};