const path  = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


const conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'build.js',
		publicPath: '../build/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
				// exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]

	},
	plugins: [
		new ExtractTextPlugin("build.css"),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};

module.exports = conf;
