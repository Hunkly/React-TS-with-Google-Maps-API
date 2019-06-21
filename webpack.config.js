const webpack = require("webpack");
const path = require("path");
const SRC = path.resolve(__dirname,"src");
const DIST = path.resolve(__dirname,"dist");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        path: DIST,
        filename: "index_bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devServer: {
        contentBase: path.join(__dirname, DIST),
        compress: true,
        port: 3000,
        watchContentBase: true,
        progress: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/"
                        }
                    }
                ]
            },
            {
                test: /\.(tsx|ts|)?$/,
                include: SRC,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,

            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};

module.exports = config;
