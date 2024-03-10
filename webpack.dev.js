const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { plugins } = require('./webpack.common')
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    // This enable webpack hot module replacement.
    devServer:{
        hot: true,
        open: true
    },
    // Defining wepack env in file (process.env.name)
    plugins:[
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify("webpack-development")
        }),
        new ReactRefreshWebpackPlugin()
    ]

}