const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                use: ['babel-loader']
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }) 
    ]
}