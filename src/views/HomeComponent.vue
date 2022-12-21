<template>
    <div>
        <nav class="navbar navbar-light bg-primary menu-superior border-bottom border-warning border-5">
            <div class="container">
                <router-link class="navbar-brand fw-bold text-info" to="/home">Empresa <span class="text-warning">360</span></router-link>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white fw-bold">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" to="/home/dashboard" exact-active-class="active">
                    <i class="bi bi-speedometer2"></i> Dashboard
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas" exact-active-class="active">
                    <i class="bi bi-cart"></i> Vendas
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas/leads" exact-active-class="active">
                    <i class="bi bi-caret-right"></i> Leads
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{ name: 'contratos' }" exact-active-class="active">
                    <i class="bi bi-caret-right"></i> Contratos
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/servicos" exact-active-class="active">
                    <i class="bi bi-card-checklist"></i> Serviços
                </router-link>
            </div>

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div class="container-fluid">
                   <router-view></router-view>
                </div>

                <div class="rodape">
                    <router-view name="rodape"></router-view>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}

.rodape{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
}


</style>