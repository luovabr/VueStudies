new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito: false,
		efeitoNome: ''
	},
	methods: {
		iniciarEfeito() {
			this.aplicarEfeito = !this.aplicarEfeito;
		},
		iniciarProgresso() {

		}
	}
})
