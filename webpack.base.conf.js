const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: { //这里的文件都会加载到设置的出口模板里
        app: './src/index.js',
		test:path.resolve(__dirname, './src/test/index.js'),
    },
	
    module: { //use里用到解析时使用的模块是从右到左
    rules: [  //当入口的模块js reuire,import其它东西时（他子模块里引入的东西也会来调用，css里设置的图片(css-loader模块会调用url-loader模块来处理)），然后根据后缀名来使用对应的加载器来处理引入的数据
	  {         
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',  //.babel文件配置解析react
                }
      },
      {
         test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        // 默认打包到dist下的img文件夹
                        name: 'img/[name].[hash:7].[ext]',
						publicPath:'../'  //这个是文件引入图片的根路径设置
                    }
                },
      },
	   {
       test: /\.css$/,
                loader: ExtractTextPlugin.extract({   //返回ExtractTextPlugin设置css的加载(css得使用ExtractTextPlugin单独打包，不然requrie的css会打包到js)
					use:['css-loader?importLoaders=1','postcss-loader']
				}),
				exclude: path.resolve(__dirname,'./node_modules')
      },
	  ]
	},
	node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },

}
