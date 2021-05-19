const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const common = require("./webpack.common")
const {merge} = require("webpack-merge");
process.env.HOT = "true";
process.env.NODE_ENV = "development";
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
                test: /\.[j|t]sx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            require.resolve('react-refresh/babel')
                        ]
                    }
                }
            },
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
        open: true,
        historyApiFallback: true
    }
});