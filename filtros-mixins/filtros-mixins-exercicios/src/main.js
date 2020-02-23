import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function (valor){
	return valor.split('').reverse().join('')
})

Vue.mixin({
	created(){
		console.log('Esse mixin será aplciado em tudo. VueInstance, componentes e outros mixins');
	}
})

new Vue({
	render: h => h(App),
	created() {
		console.log('Created - Vue');
	}
}).$mount('#app')
