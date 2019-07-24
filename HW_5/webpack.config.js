const {HotModuleReplacementPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const proxy = require('http-proxy-middleware');



module.exports = {

    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        contentBase: './',
        proxy: {
            '/method': {
                target: 'https://api.vk.com',
                changeOrigin: true
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()

    ]
}