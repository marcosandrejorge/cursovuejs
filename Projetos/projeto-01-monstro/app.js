new Vue({
    el: '#projeto-monstro',
    data: {
        randomMinimo : 7,
        monstro:{
            vida: 100,
            ataque: 12,
            ataqueEspecial: 9
        },
        jogador:{
            vida: 100,
            ataque: 9,
            ataqueEspecial: 12
        },
        jogoIniciado: false,
        logAcoes : [],
        objFimJogo : {
            acabouJogo: false,
            mensagem:'',
            css:'',
        }
    },
    computed:{
        verificarSeAlguemGanhou(){
            if (this.monstro.vida <= 0){
                this.jogoIniciado = false;
                this.objFimJogo.mensagem = 'Você ganhou';
                this.objFimJogo.css = 'color-green';
                return true;
            }

            if (this.jogador.vida <= 0){
                this.jogoIniciado = false;
                this.objFimJogo.mensagem = 'Você perdeu';
                this.objFimJogo.css = 'color-red';
                return true;
            }

            return false;
        },
        vidaJogador(){
            return `${this.jogador.vida}%`
        },
        vidaMonstro(){
            return `${this.monstro.vida}%`
        },
    },
    methods:{
        iniciarJogo(){
            this.jogoIniciado = true;
            this.monstro.vida = 100;
            this.jogador.vida = 100;
            this.gerarLog('Admin','green','Inicio de jogo');
            this.logAcoes = [];
        },
        gerarNumeroRandom(maxDano){
            let min = Math.ceil(this.randomMinimo);
            let max = Math.floor(maxDano);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        ataqueJogador(forca){
            let ataque = this.gerarNumeroRandom(forca);
            this.monstro.vida -= ataque;
            this.monstro.vida = this.monstro.vida < 0 ? 0 : this.monstro.vida;
            this.gerarLog('Jogador','jogador','Jogador atingiu monstro com ' + ataque);
        },
        ataqueMonstro(forca){
            let ataque = this.gerarNumeroRandom(forca);
            this.jogador.vida -= ataque;
            this.jogador.vida = this.jogador.vida < 0 ? 0 : this.jogador.vida;
            this.gerarLog('Monstro','monstro','Monstro atingiu jogador com ' + ataque);
        },
        ataque(){
            this.ataqueMonstro(this.monstro.ataque);
            this.ataqueJogador(this.jogador.ataque);
        },
        ataqueEspecial(){
            this.ataqueMonstro(this.monstro.ataqueEspecial);
            this.ataqueJogador(this.jogador.ataqueEspecial);
        },
        curar(){
            let adicionarVida = this.gerarNumeroRandom(12);
            this.jogador.vida += adicionarVida;
            this.jogador.vida = this.jogador.vida > 100 ? 100 : this.jogador.vida;
            this.gerarLog('Jogador','jogador','Jogador ganhou força de ' + adicionarVida);
            this.ataqueMonstro(this.monstro.ataque); 
        },
        desistirJogo(){
            this.jogoIniciado = false;
            this.logAcoes = [];
        },
        gerarLog(tipoJogador, classCss, mensagemAcao){
            let objLog = {
                tipo: tipoJogador,
                css:classCss,
                mensagem:mensagemAcao
            }
            this.logAcoes.unshift(objLog);
        }
    }
});