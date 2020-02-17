const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/* This far from perfect config, this is just for demo purpose */

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // inject into DOM
                    'css-loader', // css to commonjs
                    'sass-loader' // translates sass to css
                ]
            }
        ]
    }
});