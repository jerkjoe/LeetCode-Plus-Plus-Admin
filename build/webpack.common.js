const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                include: [path.join(__dirname, '../src')],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                // 排除node_modules底下的
                exclude: /node_modules/
            },

            // CSS Loader - CSS 用的
            {
                test: /\.scss$/,
                include: [path.join(__dirname, '../src')], // 只让loader解析我们src底下自己写的文件
                use: [
                    'style-loader',
                    'css-loader',
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         importLoaders: 1,
                    //         modules: true
                    //     }
                    // },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [path.join(__dirname, '../src/styles')]
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //1024 == 1kb  
                            //小于10kb时打包成base64编码的图片否则单独打包成图片
                            limit: 10240,
                            name: path.join('img/[name].[hash:7].[ext]')
                        }
                    }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: path.join('font/[name].[hash:7].[ext]')
                    }
                }]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: true
        })
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        overlay: {
            //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
            errors: true
        },
        inline: true,
        hot: true,
        // 如果需要 proxy
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    performance: { // 性能提示，可以提示过大文件
        hints: "warning", // 性能提示开关 false | "error" | "warning"
        maxAssetSize: 100000, // 生成的文件最大限制 整数类型（以字节为单位）
        maxEntrypointSize: 100000, // 引入的文件最大限制 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            return (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetFilename))
        }
    }


}