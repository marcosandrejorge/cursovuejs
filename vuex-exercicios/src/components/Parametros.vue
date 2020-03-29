<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
    computed: {

        //parametros é o namespace do modulo da vuex
        ...mapGetters('parametros', ['getQuantidade','getPreco']),

        quantidade: {
            get() {
                return this.getQuantidade
            },
            set (valor) {
                this.setQuantidade(valor)
            }
        },

        preco: {
            get() {
                return this.getPreco
            },
            set (valor) {
                this.setPreco(valor)
            }
        }
    },

    methods: {
        //parametros é o namespace do modulo da vuex
        ...mapActions('parametros',['setQuantidade','setPreco'])
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
