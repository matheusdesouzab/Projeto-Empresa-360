<template>
    <div>
        <nav class="navbar navbar-light bg-primary menu-superior border-bottom border-warning border-5">
            <div class="container">
                <a class="navbar-brand fw-bold text-info" href="#">Empresa <span class="text-warning">360</span></a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link text-white fw-bold" href="#" to="/">Voltar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="row mt-5">
            <div class="col-6 offset-3">
                <div class="card p-3 shadow-sm rounded">
                    <p class="card-header bg-transparent fw-bold">Informe suas credenciais</p>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="E-mail">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Senha">
                        </div>
                        <button class="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>