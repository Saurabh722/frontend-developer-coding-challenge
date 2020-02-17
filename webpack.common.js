const path = require("path");

/* This far from perfect config, this is just for demo purpose */
module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(svg|png|gif|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    }
};