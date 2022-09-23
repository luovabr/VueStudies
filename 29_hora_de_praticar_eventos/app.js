new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("Alerta");
        },
        armazeneValor(event) {
            this.valor = event.target.value;
        }
    }
})