import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode){
		//el.style.backgroundColor = 'green'
		el.style.backgroundColor = binding.value
	}
})

Vue.directive('destaque2', {
	bind(el, binding, vnode) {

		let atrasar = 0;

		if (binding.modifiers['atrasar']){
			atrasar = 3000;
		}

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atrasar);
	}
})

Vue.directive('destaque3', {
	bind(el, binding, vnode) {
		if (binding.arg === 'fundo') {
			el.style.backgroundColor = binding.value.cor1
		} else {
			el.style.color = binding.value.cor1
		}
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
