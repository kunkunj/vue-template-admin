import { getToken, removeToken, setToken } from '@/utils/token'
import { defineStore } from 'pinia'
import router from '../router/index'

export const useAuth = defineStore('auth', {
	state: () => ({
		token: getToken()
	}),
	actions: {
		login(form) {
			return new Promise((resolve, reject) => {
				if (form.username && form.password) {
					const tokenStr = '123456'
					setToken(tokenStr)
					resolve()
				} else {
					reject()
				}
			})
		},
		logout() {
			removeToken()
			router.replace('/login')
		},
		getInfo() {
			return new Promise((resolve, reject) => {
				resolve({
					menus: [
						{
							icon: 'index',
							index: 'dashboard',
							title: '首页'
						},
						{
							icon: 'icon',
							index: 'icon',
							title: '图标'
						},
						{
							icon: 'page',
							index: 'page',
							title: '隐藏页面'
						},
						{
							icon: 'index',
							index: 'form',
							title: '表单相关',
							subs: [
								{
									index: 'baseForm',
									title: '基本表单'
								},
								{
									index: 'mk',
									title: '富文本',
									subs: [
										{
											index: 'editor',
											title: '富文本编辑器'
										}
									]
								},
								{
									index: 'upload',
									title: '文件上传'
								}
							]
						},
						// {
						// 	icon: 'index',
						// 	index: 'icon',
						// 	title: '自定义图标'
						// },
						// {
						// 	icon: 'index',
						// 	index: 'charts',
						// 	title: 'echart图表'
						// },
						// {
						// 	icon: 'index',
						// 	index: '6',
						// 	title: '拖拽组件',
						// 	subs: [
						// 		{
						// 			index: 'drag',
						// 			title: '拖拽列表'
						// 		},
						// 		{
						// 			index: 'dialog',
						// 			title: '拖拽弹框'
						// 		}
						// 	]
						// },
						// {
						// 	icon: 'index',
						// 	index: '7',
						// 	title: '错误处理',
						// 	subs: [
						// 		{
						// 			index: 'permission',
						// 			title: '权限测试'
						// 		},
						// 		{
						// 			index: '404',
						// 			title: '404页面'
						// 		}
						// 	]
						// }
					]
				})
			})
		}
	}
})
