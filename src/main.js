import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { initIcon } from './utils/icon'
import SvgIcon from './components/SvgIcon.vue'
import '@/router/verify'
const app = createApp(App)

app.component('svg-icon', SvgIcon)
initIcon()
app.use(createPinia()).use(ElementPlus).use(router).mount('#app')
