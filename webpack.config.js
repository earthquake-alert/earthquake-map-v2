const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            loader: "ts-loader"
          }
        ]
      },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
