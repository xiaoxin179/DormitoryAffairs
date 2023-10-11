import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/globe.css'
import  piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
const pinia=createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
app.use(createPinia())
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
