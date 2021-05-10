const path = require("path");
module.exports =  {
    entry: {
        main: "./src/app.tsx",
        vendor: "./src/vendor.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx" ]
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
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: 'asset',
                // use: {
                //     loader: "file-loader",
                //     options: {
                //         name: "[name].[ext]",
                //         outputPath: "imgs"
                //     }
                // }
            }
        ]
    }
}