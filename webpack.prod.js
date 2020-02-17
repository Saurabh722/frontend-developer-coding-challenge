const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/* This far from perfect config, this is just for demo purpose */
module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin,
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify:{
                    removeAttributeQuotes: true,
                    collapseWhitespace:true,
                    removeComments: true
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // file into DOM
                    'css-loader', // css to commonjs
                    'sass-loader' // translates sass to css
                ]
            }
        ]
    }
});