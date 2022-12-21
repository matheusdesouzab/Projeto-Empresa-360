<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            {{ dados.servico }}
        </div>
        <div class="card-body">
            <p class="card-text">
                {{ dados.descricao }}
            </p>
        </div>
    </div>
</template>

<script>

import ApiMixin from '@/mixins/ApiMixin'

export default {
    name: 'Servico',
    mixins: [ApiMixin],
    created() {
        this.getDados(`http://localhost:3000/servicos/${this.$route.params.id}`)
    },
    beforeRouteUpdate(to, from, next){
        this.getDados(`http://localhost:3000/servicos/${to.params.id}`)
        next()
    }
}
</script>