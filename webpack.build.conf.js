'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
//const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin'); //清理文件夹
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  module: {
     rules:[

        ]
  },
   output:{
        // 打包后html内引入文件是相对路径还是绝对路径
        publicPath: "./",
    },
 plugins: [
               //5、提取css到单独的文件夹对应/\.css$/引入后缀名
        new ExtractTextPlugin({
            //加上/css就会输出到css文件夹下面
            filename: 'css/[name]_[chunkhash].css',
            // filename:'app_[chunkhash].css',
            disable: false,
            allChunks: true
        }),
         new HtmlWebpackPlugin({
            title: 'React App',
            abc: '自定义输出',
            filename: 'app.html',
            template: 'react.ejs',
			chunks:['app'] //指定app.html页面需要的模块,对应entry设置
        }),
		 new HtmlWebpackPlugin({
            filename: 'test.html', //设置最后生成文件名称;
            template: path.resolve(__dirname,'./index.html'), //指定模板来接受所有数据
            chunks:['test']
        }),
        //清空输出目录
         new CleanPlugin(['dist']),
        // 1、压缩CSS
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        //2、压缩JS
		new UglifyJsPlugin({
			// 使用外部引入的新版本的js压缩工具
			parallel: true,
			uglifyOptions: {
			ie8: true,
			ecma: 6,
			warnings: false,
			mangle: true,
			// debug false
			output: {
			comments: false,
			beautify: false,
			// debug true
			},
			compress: {
			// 在UglifyJs删除没有用到的代码时不输出警告
			warnings: false,
			// 删除所有的 `console` 语句
			// 还可以兼容ie浏览器
			/*drop_console: 
			true,*/
			}
			}
			}),
        //3、指定环境
        new webpack.DefinePlugin({ //默认得配
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
})



module.exports = webpackConfig
