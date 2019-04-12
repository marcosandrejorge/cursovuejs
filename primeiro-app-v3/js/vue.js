new Vue({
    el:'#app',
    data:{
        titulo:'Usando vueJS!'
    },
    methods:{
        alterarTitulo(event){
            this.titulo = event.target.value;
        }
    }
})