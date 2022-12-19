import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'
import Site from '@/views/SiteComponent'
import Vendas from '@/components/vendas/Vendas'
import Servicos from '@/components/servicos/Servicos'

const routes = [
    {
        path: '/',
        component: Site
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'vendas',
                component: Vendas
            },
            {
                path: 'servicos',
                component: Servicos
            }
        ]
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