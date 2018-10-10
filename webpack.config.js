const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.NODE_ENV ==='development' ? 'development' : 'production';

module.exports = {
    mode,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader:'css-loader',
                        options: {
                            modules:true,
                            camelCase: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap : true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin()
    ]
}