const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const Assets = require('./assets');

module.exports = {
    module: {
        loaders: [
            {
                loader: 'babel-loader',

                include: [
                    path.resolve(__dirname, "public")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],

                test: /\.js$/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            }
        ]
    },
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