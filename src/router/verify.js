import router from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/token'
import { usePermise } from '@store/permise'

router.beforeEach((to, from, next) => {
	NProgress.start()
	document.title = to.meta.title || 'app'
	if (getToken()) {
		if (to.path === '/login') {
			next({ path: '/' })
		} else {
			const { addRouter, routes } = usePermise()
			if (routes.length == 0) {
				addRouter().then(() => {
					next({ path: to.path, query: to.query, params: to.params, replace: true })
					NProgress.done()
				})
			} else {
				next()
			}
		}
	} else {
		if (to.meta.white) {
			next()
		} else {
			next('/login')
			NProgress.done()
		}
	}
})

router.afterEach(() => {
	NProgress.done() // 结束Progress
})
