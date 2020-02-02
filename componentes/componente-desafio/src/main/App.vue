<template>
	<v-app>
		<app-menu :config-menu="itensMenu">
		</app-menu>

		<v-toolbar app>
			<v-toolbar-title class="headline text-uppercase">
				<span>Desafio</span>
				<span class="font-weight-light">Componente</span>
			</v-toolbar-title>
		</v-toolbar>

		<v-content>
			<Carrosel :fotos="fotos"/>
		</v-content>

		<v-footer class="pa-3" app>
			<v-spacer></v-spacer>
			<div>Curso Vue &copy; {{ new Date().getFullYear() }}</div>
		</v-footer>
	</v-app>
</template>

<script>
import Menu from '@/components/template/Menu'//@/ inicia da raiz do projeto, no caso na pasta SRC
import Carrosel from '@/components/widgets/Carrosel'//@/ inicia da raiz do projeto, no caso na pasta SRC

export default {
	components: {
		'app-menu': Menu,
		Carrosel
	},
	data() {
		return {
			itensMenu: [
				{titulo: 'Início', icon: 'dashboard'},
				{titulo: 'Sobre', icon: 'question_answer'}
			],
			fotos: [
				{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	}
}
</script>
