<template>
    <div class="usuario-detalhes">
        <h3>Uusário detalhe</h3>
        <hr>
        <p><strong>Código: {{ id }}</strong></p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link  primario tag="button" :to="{ 
            name: 'editarUsuario', 
            params: { id },
            query: {
                completo: true,
                lingua: 'pt'
            },
            hash: '#rodape'
        }">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        //console.log("Dentro do componente usuário detalhe, entra aqui antes de renderizar ele pelo router")
        //Aqui dentro, você não tem acesso a nada do componente, porque ele ainda não foi criado.
        // next( vm => {
            //Aqui dentro você tem acesso aos dados com componente, porque ele já foi carregado.
        // })

        const autenticado = true
        next(autenticado)
    },

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