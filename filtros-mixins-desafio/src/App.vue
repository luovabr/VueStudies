<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<h2>Exercício 1</h2>
		<input v-model="texto"/>
		{{ texto | trocar }}
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<h2>Exercício 2</h2>
		{{ message | contagem }}

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<h3>Exercício 3</h3>
		<input v-model="texto"/>
		{{ trocar }}

		<h1>Mensagem</h1>
		{{ contagem }}

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		
	</div>
</template>

<script>
import computedMixin from './computedMixin'

export default {
	data() {
		return {
			texto: '',
			message: 'Pedro é legal'
		}
	},
	mixins: [computedMixin],
	filters: {
		trocar(value) {
			return value.replace(/\s/g, ',')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
