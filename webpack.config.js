const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        zoo:{
            import: './src/index.js',
            dependOn: 'bootstrap'
        },
        bootstrap: './src/vendor/bootstrap.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: 'style-loader'
                    // },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Zoo Gru',
            template: './src/index.html',
        }),
    ],
};
