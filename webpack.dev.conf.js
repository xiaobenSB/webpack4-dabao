 const merge = require('webpack-merge');
 const common = require('./webpack.base.conf.js');
 const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(common, {
   devtool: false,
   devServer: {
	  disableHostCheck: true,  //允许代理服务器访问内容
      port: 9000, //端口改为9000
      open:true, // 自动打开浏览器
      index:'index.html' // 与HtmlWebpackPlugin中filename一样,不然默认根目录index.html
    },
	plugins: [
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
            title: 'React App',
            abc: '自定义输出',
            filename: 'index.html',
            template: 'index.html',
			chunks:['test'] //指定app.html页面需要的模块,对应entry设置
       }),
	]
});