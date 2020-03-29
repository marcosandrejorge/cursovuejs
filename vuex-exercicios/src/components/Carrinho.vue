<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    computed: {
        //carrinho é o namespace do modulo da vuex
        ...mapGetters('carrinho',{
            total: 'valorTotal' //Pode chamar por this.total
        }),

        // total() {
        //     return this.$store.getters.valorTotal
        //     return this.$store.carrinho.getters.valorTotal -> com modules
        // },

        produtos() {
            //Se fosse direto em um getter da vuex, não precisaria referenciar o state.carrinho.
            return this.$store.state.carrinho.produtos
        } 
    }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
