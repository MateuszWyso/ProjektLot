// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// module.exports = {
//     entry: {
//         index: "./src/index.js",
//         kontakt: "./src/kontakt.js"
//     },
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "bundle.js",
//         clean: false
// },
// devtool: "source-map",
// devServer:{
//     static: {
//     directory: path.join(__dirname, 'dist'),
//     },
//     port: 9000
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//         template: "./src/index.html",
//         inject: true,
//         chunks: ['index']
//         }),
//         new HtmlWebpackPlugin({
//             template: "./src/kontakt.html",
//             inject: true,
//             chunks: ['kontakt'],
//             filename: "kontakt.html"
// }),
//         new MiniCssExtractPlugin(),

//         ],
        
//     module: {
//         rules: [{
//             test: /\.scss$/,
//             use: [
//                 MiniCssExtractPlugin.loader,
//                 "css-loader",
//                 "sass-loader",
//                 {
//                     loader: "postcss-loader",
//                     options: {
//                         postcssOptions: {
//                             plugins: ["autoprefixer"]
//                         }
//                     }
//                 }
//             ]
//             },
//         {
//             test: /\.(png|svg|jpg|jpeg|gif)$/i,
//             type: 'asset/resource',
//           },
//         ]
//         }
        
// }


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js",
        summary: "./src/summary.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true
    },
    devtool: "source-map",
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
            serveIndex: true,
        },
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: true,
            chunks: ['index']
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets/json',
                    to: 'assets/json',
                    noErrorOnMissing: true,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./src/summary.html",
            inject: true,
            chunks: ['summary'],
            filename: "summary.html"
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer"]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/json/[name][ext]',
                },
            },
        ]
    }
};
