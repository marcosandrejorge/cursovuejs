import Vue from 'vue'
import Router from 'vue-router'
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
//import UsuarioEditar from './components/usuario/UsuarioEditar'
import Inicio from './components/Inicio'
import FooterInicio from './components/templates/FooterInicio'
import FooterUsuario from './components/templates/FooterUsuario'
import PageNaoEncontrada from './components/templates/PageNaoEncontrada'

//Import dinamico, sob demanda para aplicações grandes. IMPORTANTO DESSA FORMA, ESSES COMPONENTES NÃO ESTARÃO NO BUNDLE INICIAL
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

//Fazer com que os 2 componentes abaixos, sejam carregados no mesmo arquivo. é o comentário pro webpack interpretar e carregar junto
const Usuario = () => import(/* webpackChunkName: "usuario"*/'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario"*/'./components/usuario/UsuarioLista')

Vue.use(Router)

const router = new Router({
    mode: 'history',//Pra usar o modo history, precisa configurar o seu servidor node/apache pra isso. Tem na documentação oficial.
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition){
            return savedPosition //Salva a postion em cache
        } else if (to.hash){
            return { selector: to.hash } //Irá pro #rodape no componente de editar, é um hasp pro elemento.
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes:[
        {
            path: '/',
            //component: Inicio,
            name: 'inicio',
            components: {
                default: Inicio, // = <router-view />
                renderizarFooter: FooterInicio // Quando for o path "/" e tiver um "<router-view name="renderizarFooter"/>" irá renderizar o componente "FooterInicio"
            }
        },
        {
            path: '/usuario',
            //component: Usuario,
            components: {
                default: Usuario, // = <router-view />
                renderizarFooter: FooterUsuario // Quando for o path "/" e tiver um "<router-view name="renderizarFooter"/>" irá renderizar o componente "FooterUsuario"
            },
            props: true, //Esse atributo, faz com que todos os parametros(:id) sejam passados por props pro componente Usuario, logo, podes criar uma prop chamada id.
            children: [
                {
                    path: '',
                    component: UsuarioLista
                },
                {
                    path: ':id',
                    component: UsuarioDetalhe,
                    props: true,
                    beforeEnter: (to, from, next) => {
                        //console.log('Antes da rota -> usuário detalhe')
                        next()
                    },
                },
                {
                    path: ':id/editar',
                    component: UsuarioEditar,
                    props: true,
                    name: 'editarUsuario'
                }
            ]
        },
        {
            path: '/redirecionar',
            redirect: '/usuario' //Redirecionar para uma outra pagina
        },
        {
            path: '*',
            component: PageNaoEncontrada //Renderiza o componente quando a pagina informada não foi encontrada ou não existe
        },
    ]
});

//Antes de executar as rotas | MANEIRA GLOBAL
//Se não achar o next, irá interromper a entrada no componente
router.beforeEach((to, from, next) => {

    // if (to.path !== '/usuario'){
    //     next('/usuario')//Redireciona pra proxima tela
    //     next(false) //aborda o direcionamento pra proxima tela
    // }
    next()
});

export default router;