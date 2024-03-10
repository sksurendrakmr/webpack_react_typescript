const webpack = require('webpack')
const { plugins } = require('./webpack.common')
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    // Defining wepack env in file (process.env.name)
    plugins:[
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify("webpack-development")
        })
    ]

}