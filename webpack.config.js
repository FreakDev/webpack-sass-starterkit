const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
    },    
    module: {
        rules: [
            {
                test: /\.(s[ac]ss)|(css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
        path: path.resolve(__dirname, 'dist'),
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
    ]
};