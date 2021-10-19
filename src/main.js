import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route'

let vue=createApp(App)

vue.use(router)
vue.mount('#app')
