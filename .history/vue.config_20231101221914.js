const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { resolve } = require('path')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath:'./',
	lintOnSave: false,
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, './src/assets/css/main.less')]
		}
	},
	configureWebpack: {
		plugins: [
			require('unplugin-auto-import/webpack')({
				imports: ['vue', 'vue-router'],
				eslintrc: {
					enabled: true // <-- this
				}
			})
		]
	},
	chainWebpack: (config) => {
		// 别名设置
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@assets', resolve('src/assets'))
			.set('@store', resolve('src/store'))
			.set('@api', resolve('src/api'))
			.set('@components', resolve('src/components'))

		config.module.rule('svg').exclude.add(resolve('src/assets/svgicons')).end()

		config.module
			.rule('svg-sprite-loader')
			.test(/\.svg$/)
			.include.add(resolve('src/assets/svgicons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})
	}
})
