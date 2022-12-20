export default {
    data: () => ({
        dados: {}
    }),
    methods: {
        getDados(url) {
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    this.dados = response
                })
        }
    }
}