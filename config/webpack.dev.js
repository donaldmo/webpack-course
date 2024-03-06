const path = require("path")

module.exports = {
	entry: {
		main: ["./src/main.js"]
	},
	mode: "development",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{ loader: "babel-loader"}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" }, { loader: "css-loader" }
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "file-loader", options: { name: "[name].[ext]" }
					},
					{
						loader: "extract-loader", options: { publicPath: "../" }
					},
					{ loader: "html-loader" }
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: { name: "images/[name]-[hash:8].[ext]" }
					}
				]
			},
		]
	},
	devServer: {
		contentBase: "dist",
		overlay: true
	}
}