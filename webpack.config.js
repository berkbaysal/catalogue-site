const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = function (env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        output: {
            path: path.join(__dirname, '/dist'),
            filename: '[name][contenthash:8].js',
            publicPath: "/"
        },
        devServer: {
            port: 9000,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        "sass-loader"
                    ],
                },
                {
                    test:/\.(png|jpg|jpeg|gif)/,
                    loader: "file-loader",
                    options: {
                        outputPath: "./assets/img",
                        publicPath:"../assets/img"
                    }   
                }

            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "assets/css/[name][contenthash:8].css"
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: (isDevelopment ? "index.html" : "./public/index.html")
            })
        ]
    };

}