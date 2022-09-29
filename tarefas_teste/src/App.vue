<template>
	<div id="app">
		<h1>Tarefas</h1> 
		<BarraPercentual v-bind:percentual="percentual"></BarraPercentual>
		<input type="text" v-model="titleTemporario">
		<button v-on:click="addTarefa()">Clique aqui!</button>
		<ul v-if="Tarefas.length">
			<li v-for="(tarefa) in Tarefas" :key="tarefa.title">
				<TarefaBox v-bind:tarefa="tarefa" v-on:tarefaDeletada="deleteTarefa(tarefa)"></TarefaBox>
			</li>
		</ul>
		<p v-else>Tenha um bom dia!</p>
	</div>
</template>

<script>
import BarraPercentual from './components/BarraPercentual.vue'
import TarefaBox from './components/TarefaBox.vue'


export default {
  components: { 
	BarraPercentual,
	TarefaBox 
  },
  data() {
	return {
		Tarefas: [],
		titleTemporario: 'Nova tarefa?'
	}
  },
  computed: {
		percentual() {
			const total = this.Tarefas.length
			const done = this.Tarefas.filter(t => t.status).length
			return Math.round(done/total*100)
		}
  },
  methods: {
		addTarefa() {
			this.Tarefas.push({title:this.titleTemporario, status:false})
			this.titleTemporario = 'Nova tarefa?'
		},
		deleteTarefa(i) {
			this.Tarefas.splice(i, 1)
		}
  }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
	ul {
	list-style-type: none;
	}
</style>
