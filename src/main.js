import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route/index.js'

let vue=createApp(App)

vue.use(router)
vue.mount('#app')
