const path = require('path')

const env = process.env.TYPE || 'development'

module.exports = {
    mode: env,
    entry: {
      'seismic_intensity_scale': './core/seismic_intensity_scale/main.ts',
      'seismicity_of_earthquake_source': './core/seismicity_of_earthquake_source/main.ts',
      'tsunami_information': './core/tsunami_information/main.ts',
      'epicenter': './core/epicenter/main.ts'
    },
    output: {
        path: path.join(__dirname, "./server/js"),
        filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
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
