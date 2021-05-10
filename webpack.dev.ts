const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const common = require("./webpack.common")
const {merge} = require("webpack-merge");
module.exports =  merge(common, {
    mode: "development",
    optimization:{
        runtimeChunk: 'single'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new ReactRefreshWebpackPlugin(),
    ],
    devtool: "source-map",
    devServer: {
        contentBase: "./build",
        hot: true,
        open: true
    }
});