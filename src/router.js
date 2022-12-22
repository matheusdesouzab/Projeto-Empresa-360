import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/HomeComponent.vue'
import Login from '@/views/LoginComponent.vue'
import Site from '@/views/SiteComponent'
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada'

import Vendas from '@/components/vendas/Vendas'
import Leads from '@/components/vendas/Leads'
import Lead from '@/components/vendas/Lead'
import Contratos from '@/components/vendas/Contratos'
import VendasPadrao from '@/components/vendas/VendasPadrao'

import Servicos from '@/components/servicos/Servicos'
import Servico from '@/components/servicos/Servico'
import Opcoes from '@/components/servicos/Opcoes'
import Indicadores from '@/components/servicos/Indicadores'

import Dashboard from '@/components/dashboard/Dashboard'
import DashboardRodape from '@/components/dashboard/DashboardRodape'

const routes = [
    {
        path: '/',
        component: Site,
        meta: {
            requerAutorizacao: false
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            requerAutorizacao: false
        },
        children: [
            {
                path: 'vendas',
                component: Vendas,
                children: [
                    {
                        path: 'leads', component: Leads, name: 'leads', 
                        beforeEnter(to, from){
                            console.log('Guarda de rota - Before enter')
                        }
                    },
                    {
                        path: 'leads/:id', component: Lead, props: true
                    },
                    {
                        path: 'contratos', component: Contratos, name: 'contratos'
                    },
                    {
                        path: '', component: VendasPadrao
                    }
                ]
            },
            {
                path: 'servicos',
                component: Servicos,
                children: [
                    {
                        path: ':id',
                        name: 'servico',
                        props: {
                            default: true,
                            indicadores: true,
                            opcoes: true
                        },
                        components: {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores
                        }
                    }
                ]
            },
            {
                path: 'dashboard',
                components: {
                    default: Dashboard,
                    rodape: DashboardRodape
                }
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/:catchAll(.*)*',
        component: PaginaNaoEncontrada
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to) => {
    if(to.meta.requerAutorizacao){

    }
})

router.afterEach((to, from) => {

})

export default router