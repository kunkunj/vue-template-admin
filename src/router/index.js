import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Home.vue'
import asyncRoutes from './routes'
import { usePermise } from '@/store/permise'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: '/dashboard',
				name: 'Dashboard',
				component: () => import('@/views/Dashboard/index.vue')
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			white: true
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
