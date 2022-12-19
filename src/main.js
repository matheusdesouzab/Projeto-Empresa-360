import { createApp } from 'vue'
import App from './App.vue'

import { createRouter , createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const Vue = createApp(App)

Vue.use(router)
Vue.mount('#app')


