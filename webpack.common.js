var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        devtoolLineToLine: true
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'typescript starter',
            template: './src/index.html'
        })
    ],
    optimization: {
        minimize: false
    },
    devtool: 'source-map'
};