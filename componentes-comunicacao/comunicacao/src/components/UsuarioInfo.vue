<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do usuário: {{ idade }}</p>
        <button @click="ReiniciarNome()">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome com call back</button>
    </div>
</template>

<script>
import barramento from "@/barramento.js";

export default {
    props: {
        nome: {
            type: String,
            //required: true,
            default: 'Teste'
        },
        reiniciarFn: Function,
        idade: Number
    },

    data() {
        return {

        }
    },

    methods: {
        ReiniciarNome(){
            this.$emit('nomeMudou', 'Marcos');
        }
    },

    created(){
        // barramento.$on('idadeAlterou', (idade)=> {
        //     this.idade = idade;
        // });

        barramento.quandoIdadeMudar((idade)=> {
            this.idade = idade;
        });
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
