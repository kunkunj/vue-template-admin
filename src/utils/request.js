import axios from 'axios'
import { getToken } from './token'
import { ElMessage } from 'element-plus'

const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 15000, // request timeout
	headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})
service.interceptors.request.use(
	(config) => {
		if (getToken()) {
			config.headers['Authorization'] = getToken()
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)
// response interceptor
service.interceptors.response.use(
	// 处理状态码
	(response) => {
		const res = response.data

		return res
	},
	(error) => {
		console.log('err' + error) // for debug
		ElMessage({
			message: error.message,
			type: 'error',
			duration: 5 * 1000
		})
		return Promise.reject(error)
	}
)
export default service
