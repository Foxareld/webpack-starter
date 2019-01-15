const HtmlWebPackPlugin = require ("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin('dist', {})
    ]
}