export default {

    namespaced: true,

    state: {
        quantidade: 0,
        preco: 0
    },

    getters: {
        getQuantidade(state) {
            return state.quantidade
        },
        getPreco(state) {
            return state.preco
        }
    },
    mutations: {
        setQuantidade(state, quantidade) {
            state.quantidade = quantidade
        },
        setPreco(state, preco) {
            state.preco = preco
        }
    },
    actions: {
        setQuantidade({ commit }, quantidade) {
            commit('setQuantidade', quantidade)
        },

        setPreco({ commit }, preco) {
            commit('setPreco', preco)
        }
    }
}