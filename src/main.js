import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./route/index.js"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(router)
app.use(pinia)
app.mount('#app')
