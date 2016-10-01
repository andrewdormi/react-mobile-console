"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: 'build',
        filename: 'console.js'
    },
    devtool: 'source-map',
    resolve: {
        modulesDirectories: [
            '../node_modules'
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new CopyWebpackPlugin([
            {from: './index.html'}
        ])
    ]
};