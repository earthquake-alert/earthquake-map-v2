const { config } = require('@swc/core/spack')

const mode = process.env.NODE_ENV ?? "development"
console.log(`mode: ${mode}`)

module.exports = config({
    entry: {
        'tsunami': __dirname + '/lib/tsunami/index.ts',
        'earthquake_report': __dirname + '/lib/earthquake_report/index.ts',
        'earthquake_info': __dirname + '/lib/earthquake_info/index.ts',
    },
    output: {
        path: __dirname + '/public/js'
    },
    mode: mode,
});
