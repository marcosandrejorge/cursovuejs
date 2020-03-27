<template>
    <div class="usuario-editar">
        <h3>Usuário editar</h3>
        <hr>
        <p><strong>Código: {{ id }}</strong></p>
        <p><strong>Completo: {{ $route.query.completo ? 'Sim' : 'Não' }}</strong></p>
        <p><strong>Lingua: {{ $route.query.lingua }}</strong></p>

        <hr>
        <button primario @click="confirmou = true">Confirmar</button>

        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            confirmou: false
        }
    },

    //Antes de sair do componente com router
    beforeRouteLeave(to, from, next){
        //Aqui você tem todos os dados do componente.
        if (this.confirmou) next()
        else next(confirm('Tem certeza?'))
    }
}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>