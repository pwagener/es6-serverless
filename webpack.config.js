'use strict';

const babelifySrcLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    // NOTE:  the es2015 preset is in 'package.json', not here
    loader: "babel-loader?cacheDirectory"
};


module.exports = {
    target: 'node',

    // The entry
    entry: './src/handler.js',

    output: {
        path:  './dist',
        filename: "greeter.js",
        libraryTarget: "commonjs2"
    },

    module: {
        rules: [
            babelifySrcLoader
        ]
    }
};