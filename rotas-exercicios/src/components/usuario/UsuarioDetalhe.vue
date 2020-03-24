<template>
    <div class="usuario-detalhes">
        <h3>Uusário detalhe</h3>
        <hr>
        <p><strong>Código: {{ id }}</strong></p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link  primario tag="button" :to="{ name: 'editarUsuario', params: { id }}">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],

    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },

    // watch: {
    //     //Atualizando o id quando é o mesmo componente. Se ficar intercalando entre o mesmo componente, o params não é atualizado.
    //     $route(to, from){
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>