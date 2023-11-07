
import zn from './zn'
import en from './en'
// 准备翻译的语言环境信息
import { createI18n } from 'vue-i18n'

const language = localStorage.getItem('local-language')

const i18n = createI18n({
	locale: language || 'zn',
	allowComposition: true, // you need to specify that!
	globalInjection: true, // 全局注册$t方法
	messages: {
		en: en,
		zn: zn
	}
})

export default i18n
