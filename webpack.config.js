const path = require('path')
require('dotenv').config()

const env = process.env.TYPE || 'development'

console.log(`build mode: ${env}`)

module.exports = {
    mode: env,
    entry: {
      'seismic_intensity_scale': './core/seismic_intensity_scale/main.ts',
      'seismicity_of_earthquake_source': './core/seismicity_of_earthquake_source/main.ts',
      'tsunami_information': './core/tsunami_information/main.ts',
      'epicenter': './core/epicenter/main.ts'
    },
    output: {
        path: path.join(__dirname, "./server/public/js"),
        filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: "webpack.tsconfig.json",
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
  resolve: {
      extensions: ['.ts', '.js']
  }
}
