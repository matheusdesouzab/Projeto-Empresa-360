<template>
    <div>
        <h5>Contratos</h5>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Lead</th>
                    <th scope="col">Serviço</th>
                    <th scope="col">Data início</th>
                    <th scope="col">Data final</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td>{{ d.id }}</td>
                    <td>{{ d.lead.nome }}</td>
                    <td>{{ d.servico.servico}}</td>
                    <td>{{ d.data_inicio }}</td>
                    <td>{{ d.data_fim }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import ApiMixin from '@/mixins/ApiMixin'

export default {
    name: 'Contratos',
    mixins: [ApiMixin],
    created() {
        this.getDados('http://localhost:3000/contratos?_expand=lead&_expand=servico')
    }
}
</script>