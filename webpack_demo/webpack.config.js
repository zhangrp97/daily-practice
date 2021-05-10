const path = require('path'); //引入node.js的path模块，用于处理文件路径
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index_test.html', // 生成的html名字
            template: './index.html'  // 把编译后的js通过script的方式注入到这个文件里
        })
    ]
}