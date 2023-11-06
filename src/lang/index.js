
import zn from './zn'
import en from './en'
// 准备翻译的语言环境信息
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
	locale: 'zn',
	allowComposition: true, // you need to specify that!
	messages: {
		en: en,
		zn: zn
	}
})

export default i18n
