<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel" v-if="!viewForm">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.trim="userForm.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="userForm.password">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model.number="userForm.age">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model.lazy.trim="message"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" v-model="characteristics" value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" v-model="characteristics" value="intermitente"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio" value="web" v-model="product"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="product"> Mobile</span>
					<span><input type="radio" value="other" v-model="product"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="priority">
						<option v-for="priority in priorities"
						:value="priority.codigo"
						:key="priority.codigo"
						:selected="priority.codigo === 1"
						>{{priority.nome}}</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="choice"/>
				</Rotulo>
				<hr>
				<button @click.prevent="sendForm()">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ userForm.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ userForm.password }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ userForm.age }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span>{{ message }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="c in characteristics" :key="c">{{c}}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ product }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ priority }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ choice}}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data() {
		return {
			viewForm: false,
			message: '',
			characteristics: [],
			product: 'web',
			priority: 1,
			priorities: [
				{codigo: 1, nome: 'Baixa'},
				{codigo: 2, nome: 'Moderada'},
				{codigo: 3, nome: 'Alta'},
			],
			choice: false,
			userForm: {
				email: '',
				password: '',
				age: null
			}
		}
	},
	created() {
		setTimeout(() => {
			this.userForm.email = ''
			this.userForm.password = ''
			this.userForm.age = null
			this.product = 'web',
			this.characteristics = [],
			this.message = ''
		}, 30000);
	},
	methods: {
		sendForm() {
			this.viewForm = true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
