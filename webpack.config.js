const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'webflow-bundle': './src/index.js',
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: true,
    },
};
