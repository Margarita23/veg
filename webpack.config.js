const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassPlugin = require('sass-webpack-plugin');
const path = require('path');

const config = {
    entry: {
    app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new SassPlugin('./src/style.scss', process.env.NODE_ENV),
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
            {
                test: /\.(png|svg|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: "[path][name].[ext]"
                },
            }
        ]
    }
}

module.exports = config;