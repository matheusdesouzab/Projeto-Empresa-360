<template>
    <h5>{{ dados.id }} - {{ dados.nome }}</h5>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" :value="dados.id">
        </div>
    </div>

    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Nome</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" :value="dados.nome">
        </div>
    </div>

    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Telefone</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" :value="dados.telefone">
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-auto">
            <router-link to="/home/vendas/leads" class="btn btn-secondary">Voltar</router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Lead',
    data: () => ({
        dados: ''
    }),
    methods: {
        getLeadById() {
            fetch(`http://localhost:3000/leads/${this.$route.params.id}`)
                .then(response => response.json())
                .then(response => {
                    this.dados = response
                })
        }
    },
    created() {
        this.getLeadById()
    }
}
</script>