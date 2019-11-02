const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports =env => {
    const isDev = !env.production;
    const pubPath = isDev?"/":".";
    return {
        entry: {
            main: "./src/index.js",
            board: "./board.js"
        },
        output: {
            filename: '[name]_[hash:8].js',
            publicPath: pubPath,
        },
        module: {
            rules: [
                {
                    "test": /\.(js|jsx)$/,
                    "exclude": /node_modules/,
                    "use": {
                        "loader": "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: isDev,
                                reloadAll: true,
                            },
                        },
                        "css-loader"]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "./index.html"
            }),
            new HtmlWebPackPlugin({
                template: "./public/board.html",
                filename: "./board.html"
            }),
            new MiniCssExtractPlugin({
                filename: `[name]_min.css`
            }),
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
                name: 'common',
            },
            runtimeChunk: {
                name: 'runtime',
            },
            minimize: true,
            minimizer: [
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        discardComments: {removeAll: true} // 移除注释
                    }
                }),
                new UglifyJsPlugin({
                    sourceMap: isDev,
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            unused: true,
                            drop_debugger: true,
                            drop_console: true,
                        },
                        output: {comments: false}
                    }
                })
            ]
        }
    };
};