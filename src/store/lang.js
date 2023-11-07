import { useI18n } from 'vue-i18n'
import { defineStore } from 'pinia'

export const useLang = defineStore('lang', () => {
	const { locale } = useI18n()
	const setLang = (lang) => {
		locale.value = lang
		localStorage.setItem('local-language', lang)
	}
	return {
		locale,
		setLang
	}
})
