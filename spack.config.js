const { config } = require('@swc/core/spack')

const mode = process.env.NODE_ENV ?? "debug"
console.log(`mode: ${mode}`)

module.exports = config({
    entry: {
        'tsunami': __dirname + '/lib/tsunami.ts',
        'earthquake_report': __dirname + '/lib/earthquake_report.ts',
        'earthquake_info': __dirname + '/lib/earthquake_info.ts',
    },
    output: {
        path: __dirname + '/public/js'
    },
    mode: mode,
    options: {
        "minify": true,
        "jsc": {
            "minify": {
                "compress": true,
                "mangle": true
            },
            "parser": {
                "syntax": "typescript",
                "tsx": false,
                "decorators": false,
                "dynamicImport": false
            }
        }
    }
});
