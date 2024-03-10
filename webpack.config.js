const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js')

/**
 * By defining a function instead of an object, we will able to get
 * access of env variables which will be passed from package.json file.
 */
module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(webpackCommonConfig, envConfig)
    return config;
}