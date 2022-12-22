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
            <button type="button" class="btn btn-info text-white fw-bold" @click="$router.push({ name: 'leads' })">Voltar</button>
        </div>
    </div>

</template>

<script>

import ApiMixin from '@/mixins/ApiMixin'

export default {
    name: 'Lead',
    mixins: [ApiMixin],
    props: [
        'id'
    ],
    created() {
        this.getDados(`http://localhost:3000/leads/${this.id}`)
    },
    beforeRouteLeave(){
        const confimar = window.confirm("Deseja sair deste formulário?")
        return confimar
    }
}
</script>