const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const Assets = require('./assets');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: "./public/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin(
            Assets.map(asset => {
                return {
                    from: path.resolve(__dirname, `./node_modules/${asset}`),
                    to: path.resolve(__dirname, './public/vendors')
                };
            })
        )
    ]
};