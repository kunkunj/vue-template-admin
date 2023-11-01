import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Home.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Layout,
		redirect: '/dashboard',
		meta: {
			title: '主页',
			KeepAlive:true
		},
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				component: () => import('@/views/Dashboard/index.vue')
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			white: true,
			title: '登录'
		},
		component: () => import('@/views/login/index.vue')
	},
	{
		path: '/:pathMatch(.*)',
		name: '404',
		component: () => import('@/views/404.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
