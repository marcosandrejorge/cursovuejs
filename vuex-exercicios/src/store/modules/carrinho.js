export default {

    namespaced: true, //Definição de namespace para o modulo, evitar conflitos de getters, mutations e actions com outros módulos

    state: {
        produtos: []
    },

    getters: {
        //valorTotal(state, getters, rootState)
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },

    mutations: {
        //Mutations só aceita 2 parametros no maximo
        adicionarProduto(state, produto) {
            state.produtos.push(produto)
        }
    },

    actions: {
        //context = this
        // adicionarProduto(context, payload){
        //     setTimeout(() => {
        //         context.commit('adicionarProduto', payload)
        //     }, 1000);
        // },

        //adicionarProduto({ commit, state, rootState }, payload)
        // state -> estado atual do modulo carrilho
        // rootState -> estado central com todo o vuex store
        //{ commit }Expoe a função commit do context
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000);
        },


        //Definir uma action no root central da vuex
        // adicionarProduto: {
        //     root: true,
        //     handler({ commit }, payload) {
        //         setTimeout(() => {
        //             commit('adicionarProduto', payload)
        //         }, 1000);
        //     }
        // }
    }
}