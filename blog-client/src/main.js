import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { userState } from './store/user'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.withCredentials= true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = 'http://localhost:8000';
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
const store = userState()
axios.interceptors.request.use(res => {
    return res}, err => {if (err.response.status === 401) {
        store.logout()
        router.push({name: 'login'})
    }
})
app.mount('#app')
