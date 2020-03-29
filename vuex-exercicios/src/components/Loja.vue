<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" :value="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" :value="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

//import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },

    computed: {

        //parametros é o namespace do modulo da vuex
        ...mapGetters('parametros',['getQuantidade','getPreco']),

        quantidade() {
            return this.getQuantidade
        },

        preco() {
            return this.getPreco
        },

    },

    methods: {

        //carrinho é o namespace do modulo da vuex
        ...mapActions('carrinho',['adicionarProduto']),

        //...mapMutations(['adicionarProduto']),

        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            
            this.adicionarProduto(produto);
            //this.$store.state.produtos(produto) //Alterará diretamente o state
            //this.$store.dispath('adicionarProduto', produto) //Chamará a action
            //this.$store.commit('adicionarProduto', produto) //Chamará a mutations
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
