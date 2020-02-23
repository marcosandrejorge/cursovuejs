<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'teste <strong>HTML</strong>'"></p>
		<p v-html="'teste <strong>HTML</strong>'"></p>
		<p v-destaque="'blue'">Usando directive criada</p>
		<p v-destaque2:fundo="'red'">Usando directive criada</p>
		<p v-destaque2="'red'">Usando directive criada</p>
		<p v-destaque2:fundo.atrasar="'blue'">Usando directive criada</p>
		<p v-destaque2.atrasar="'blue'">Usando directive criada</p>
		<p v-teste-local>Usando directive criada</p>
		<p v-destaque3="{cor1: 'red'}">Usando directive criada</p>
		<!-- <p v-destaque2:argumento.modificador1.modificador2.modificador3="'blue'">Usando directive criada</p> -->
	</div>
</template>

<script>
export default {
	directives: {
		'teste-local':{
			bind(el){
				el.style.color = 'green'
			}
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
