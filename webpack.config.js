const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: './employee/public/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'employee/static/js')
	},
	resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
	module: {
		rules: [
		  {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
		]
	},
	plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
