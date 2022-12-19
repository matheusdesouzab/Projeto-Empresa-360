import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'
import Site from '@/views/SiteComponent'

const routes = [
    {
        path: '/',
        component: Site
    },
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

export default router