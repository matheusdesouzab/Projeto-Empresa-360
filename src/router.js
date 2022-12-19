import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'
import Site from '@/views/SiteComponent'
import Vendas from '@/components/vendas/Vendas'
import Leads from '@/components/vendas/Leads'
import Contratos from '@/components/vendas/Contratos'
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
                component: Vendas,
                children: [
                    {
                        path: 'leads', component: Leads
                    },
                    {
                        path: 'contratos', component: Contratos
                    }
                ]
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