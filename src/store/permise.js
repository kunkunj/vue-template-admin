import { defineStore } from 'pinia'
import router from '@/router'
import asyncRoutes from '@/router/routes'
import { useAuth } from '@store/auth'

export const usePermise = defineStore('permise', {
	state: () => ({
		menus: [],
		routes: []
	}),
	actions: {
		//根据menu生成路由
		generateRoutersByMenu(menus, routes = asyncRoutes) {
			return routes.filter((item) => {
				if (item.children && item.children.length) {
					item.children = this.generateRoutersByMenu(menus, item.children)
				}
				return this.routeInMenus(item, menus)
			})
		},
		routeInMenus(route, menus) {
			return !!menus.find((item) => {
				if (item.subs && item.subs) {
					return item.index == route.name || this.routeInMenus(route, item.subs)
				}
				return item.index == route.name
			})
		},
		findRouteByMenu(menu, routes) {
			return routes.find((item) => {
				return item.name == menu.index
			})
		},
		filterMenus(menus) {
			return menus.filter((item) => {
				const obj = this.findRouteByMenu(item, router.getRoutes())
				if (item.subs && item.subs.length) {
					item.subs = this.filterMenus(item.subs)
				}
				item.index = obj.path
				return !obj.meta.hidden
			})
		},
		setRouter(routes, name = 'home') {
			routes.map((item) => {
				router.addRoute(name, {
					...item,
					children: []
				})
				if (item.children && item.children.length) {
					this.setRouter(item.children, item.name)
				}
			})
		},
		addRouter() {
			if (this.routes && this.routes.length && this.menus && this.menus.length) {
				this.setRouter(this.routes)
				return Promise.resolve()
			}
			return new Promise((a) => {
				const { getInfo } = useAuth()
				getInfo().then((res) => {
					this.routes = this.generateRoutersByMenu(res.menus)
					this.setRouter(this.routes)
					this.menus = this.filterMenus(res.menus)
					console.log(this.menus)
					a()
				})
			})
		}
	}
})
