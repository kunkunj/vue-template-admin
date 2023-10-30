export const initIcon = function () {
	try {
		const request = require.context('../assets/svgicons', false, /\.svg$/)
		request.keys().forEach(request)
	} catch (err) {
		console.log(err)
	}
}
