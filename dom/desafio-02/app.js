new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Exibindo alerta');
        },
        armazenar(e){
            this.valor = e.target.value;
        }
    }
})