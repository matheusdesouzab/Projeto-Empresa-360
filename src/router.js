import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'
import Site from '@/views/SiteComponent'
import Vendas from '@/components/vendas/Vendas'
import Leads from '@/components/vendas/Leads'
import Lead from '@/components/vendas/Lead'
import Contratos from '@/components/vendas/Contratos'
import Dashboard from '@/components/dashboard/Dashboard'
import Servicos from '@/components/servicos/Servicos'
import VendasPadrao from '@/components/vendas/VendasPadrao'

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
                        path: 'leads/:id', component: Lead
                    },
                    {
                        path: 'contratos', component: Contratos
                    },
                    {
                        path: '', component: VendasPadrao
                    }
                ]
            },
            {
                path: 'servicos',
                component: Servicos
            },
            {
                path: 'dashboard',
                component: Dashboard
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