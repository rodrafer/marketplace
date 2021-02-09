/*global require, module, __dirname*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'react-image-element-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        public: 'http://localhost:3000/dist/',
        hotOnly: true,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:8000/',
            secure: false,
            changeOrigin: true
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
