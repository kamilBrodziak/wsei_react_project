module.exports =  {
    entry: {
        main: "./src/index.tsx",
        vendor: "./src/vendor.js",
    },
    output: {
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx" ]
    },
    module: {
        rules: [
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