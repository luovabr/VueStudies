export default {
	computed: {
		trocar() {
			return this.texto.replace(/\s/g, ',')
		},
		contagem() {
			let aux = ''
			let value = ''
			value = this.message.split(' ')

			for (let prop in value)
			{
				aux += value[prop] + ' (' + value[prop].length + ') '
			}
			return aux
		}
    }
}
