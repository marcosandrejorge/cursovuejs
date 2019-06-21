new Vue({
	el: '#desafio',
	data: {
		efeitoBotao:'encolher',
		classeGreen:true,
		classeUsuario:'',
		classeUsuario2:'',
		adicionarClasseUsuario2:false,
		corUsuario:'',
		style5:{
			width:'100px',
			height:'100px'
		},
		larguraBarra:0,
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.efeitoBotao = this.efeitoBotao == 'destaque' ? 'encolher' : 'destaque';
			},2000)
		},
		iniciarProgresso() {
			const interval = setInterval(()=>{
				this.larguraBarra += 20;
				if (this.larguraBarra == 500) clearInterval(interval);
			},100);
		},

		setAdicionarClasse(event){
			if (event.target.value == "true"){
				this.adicionarClasseUsuario2 = true;
			}else if(event.target.value == "false"){
				this.adicionarClasseUsuario2 = false;
			}
		}
	}
})
