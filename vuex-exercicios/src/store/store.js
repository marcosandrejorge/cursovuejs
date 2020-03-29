import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'
import * as getters from './getters' //Faz com que todos metodos em getters.js sejám retornados em getters

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: 'Marcos',
        sobreNome: 'Jorge'
    },
    getters,//Esse getters é mais quando é um getter geral, que não se encaixa em algum modulo.
    modules: {
        carrinho,
        parametros
    }
});