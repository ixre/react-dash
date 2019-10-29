const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    output: {
        filename: 'bundle_[name]_[hash].js',
        publicPath: "/",
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
        //new BundleAnalyzerPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: `styles/[name].css`
        }),
    ]
};