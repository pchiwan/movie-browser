'use strict';  
var webpack = require('webpack');

var APP = __dirname + '/app';

module.exports = {
    context: APP,
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: 'app'
    },
     module: {
        loaders: [
            { test: /\.js?$/,
              loader: 'babel-loader',
               query: {
                  presets: ['es2015']
                } 
            }
        ]
    }
};