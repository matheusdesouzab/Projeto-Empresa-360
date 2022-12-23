import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/HomeComponent.vue')
const Login = () => import('@/views/LoginComponent.vue')
const Site = () => import('@/views/SiteComponent.vue')
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada.vue')

const Vendas = () => import('@/components/vendas/Vendas')
const Leads = () => import('@/components/vendas/Leads')
const Lead = () => import('@/components/vendas/Lead')
const Contratos = () => import('@/components/vendas/Contratos')
const VendasPadrao = () => import('@/components/vendas/VendasPadrao')

const Servicos = () => import('@/components/servicos/Servicos')
const Servico = () => import('@/components/servicos/Servico')
const Opcoes = () => import('@/components/servicos/Opcoes')
const Indicadores = () => import('@/components/servicos/Indicadores')

const Dashboard = () => import('@/components/dashboard/Dashboard')
const DashboardRodape = () => import('@/components/dashboard/DashboardRodape')

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
                        beforeEnter(to, from) {
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
    scrollBehavior(to, from, savePosition) {

        if(savePosition){
            return savePosition
        }

        if (to.hash) {
            return { el: to.hash }
        }

        return { left: 0, top: 0 }
    },
    routes
})

router.beforeEach((to) => {
    if (to.meta.requerAutorizacao) {

    }
})

router.afterEach((to, from) => {

})

export default router