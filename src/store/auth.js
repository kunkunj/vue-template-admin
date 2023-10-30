import { getToken, setToken } from '@/utils/token'
import { defineStore } from 'pinia'

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
		}
	}
})
