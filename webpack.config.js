var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TSLintPlugin = require('tslint-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	entry: ['./src/js/app.ts', './src/scss/main.scss'],
	output: {
		filename: './build/app.js'
	},
	module:{
		rules:[
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			},
			{
  				test: /\.ts|\.tsx$/,
  				use: 'awesome-typescript-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: './build/styles.css'
		}),
		new HtmlWebpackPlugin({
			filename: './build/index.html',
			template: './src/index.html',
			inject:'body'
		}),
		new TSLintPlugin({
			files: ['./src/js/*.ts']
		}),
		new StyleLintPlugin({
	      configFile: 'stylelintrc',
	      context: 'src',
	      files: 'scss/*.scss',
	      failOnError: false,
	      quiet: false,
    	}),
    	new CleanWebpackPlugin(['build'])
	]
};