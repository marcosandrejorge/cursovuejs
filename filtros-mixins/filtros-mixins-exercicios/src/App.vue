<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<p>{{ cpf | inverter | cpf }}</p>
		<input type="text" :value="cpf | cpf"/>
		<p>{{ nomeUsario }}</p>
	</div>
</template>

<script>
import usuarioMixin from './usuarioMixin'
export default {

	mixins: [
		usuarioMixin
	],

	filters: {
		cpf(valor){
			let arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},

	data(){
		return {
			cpf: '60070080090'
		}
	},

	created(){
		console.log('Created - App')
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
