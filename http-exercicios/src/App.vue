<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>

		<b-alert show dismissible v-for='mensagem in mensagens' :key='mensagem.texto'
			:variant="mensagem.tipo"
		>
			{{mensagem.texto}}
		</b-alert>

		<b-card>
			<b-form-group>
				<b-form-input
					type=text size="lg" v-model="usuario.nome" placeholder="Informe o Nome"
				>
				</b-form-input>
			</b-form-group>
			<b-form-group>
				<b-form-input
					type=text size="lg" v-model="usuario.email" placeholder="Informe o Email"
				>
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar()"
				size="lg" variant="primary"
			>
				Salvar
			</b-button>
		</b-card>

		<b-card>
			<b-button @click="obterUsuarios()"
				size="lg" variant="success"
			>
				Obter usuários cadastrados
			</b-button>
			<hr>
			<b-list-group>
				<b-list-group-item v-for='(usuario, id) in usuarios' :key="id">
					<strong>Nome: {{usuario.nome}}</strong><br>
					<strong>Email: {{usuario.email}}</strong><br>
					<strong>Id: {{id}}</strong><br>
					<b-button @click="carregar(id)"
						size="lg" variant="warning"
					>
						Carregar dados
					</b-button>
					<b-button @click="excluir(id)"
						size="lg" variant="danger" class="ml-2"
					>
						Excluir
					</b-button>
				</b-list-group-item>
			</b-list-group>
		</b-card>
	</div>
</template>

<script>
export default {

	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},

	methods: {
		salvar() {

			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'

			this.$http[metodo](`usuarios${finalUrl}`, {
				nome: this.usuario.nome,
				email: this.usuario.email
			}).then(
				() => {
					this.limparDados()
					this.obterUsuarios()
					this.mensagemSucesso()
				}
			)
		},

		obterUsuarios() {
			this.$http.get('usuarios.json').then(
				response => {
					this.usuarios = response.data
				}
			)

			//this.$http.defaults.headers.common['Authorization'] = '123'
		},

		carregar(id) {
			this.id = id;
			this.usuario = {...this.usuarios[id]}
		},
		
		excluir(id) {
			this.$http.delete(`usuarios/${id}.json`).then(
				()=> {
					this.limparDados()
					this.mensagemSucesso()
					this.obterUsuarios()
				}).catch(()=>{
					this.mensagemError();
				})
		},

		mensagemError(){
			this.mensagens.push({
				texto: 'Ocorreu algum erro na tentativa de realizar a operação',
				tipo: 'danger'
			});
		},

		mensagemSucesso(){
			this.mensagens.push({
				texto: 'Operação realizada com sucesso',
				tipo: 'success'
			})
		},
		
		limparDados() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null,
			this.mensagens = []
		}
	},

	created() {
		
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
