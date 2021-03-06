"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
    entry: './index.js',
    output: {
        path: 'lib',
        filename: 'react-mobile-console.js'
    },
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
};