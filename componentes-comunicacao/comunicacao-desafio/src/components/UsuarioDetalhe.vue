<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuarioSelecionado">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuarioSelecionado.id }}</h2>
            <h2>Nome: {{ usuarioSelecionado.nome }}</h2>
            <h2>Idade: {{ usuarioSelecionado.idade }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        usuarioSelecionado: Object
    },
    data() {
        return {
        }
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
