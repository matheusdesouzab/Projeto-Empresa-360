<template>
    <div class="bg-light">
        <nav class="navbar navbar-light bg-primary menu-superior border-bottom border-warning border-5">
            <div class="container">
                <a class="navbar-brand fw-bold text-info" href="#">Empresa <span class="text-warning">360</span></a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link fw-bold text-white" href="#" to="/login">Acessar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container mt-5">
            <div class="row d-flex align-items-center">
                <div class="col">
                    <div class="destaque">
                        <h4 class="text-primary text-center">Descubra as vantagens em utilizar o Empresa 360 para gerenciar seus negócios!</h4>
                    </div>
                </div>
                <div class="col">
                    <p class="text-center fw-bold text-secondary">Inscreva-se e veja a nossa demonstração</p>
                    <div class="card p-3 shadow-sm rounded">
                        <div class="card-body">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Nome">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="E-mail">
                            </div>
                            <button class="btn btn-primary">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu-superior {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.destaque {
    padding: 60px 15px;
}
</style>