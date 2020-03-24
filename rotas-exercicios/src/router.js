import Vue from 'vue'
import Router from 'vue-router'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import Inicio from './components/Inicio'


Vue.use(Router)

export default new Router({
    mode: 'history',//Pra usar o modo history, precisa configurar o seu servidor node/apache pra isso. Tem na documentação oficial.
    routes:[
        {
            path: '/',
            component: Inicio,
            name: 'inicio'
        },
        {
            path: '/usuario',
            component: Usuario,
            props: true, //Esse atributo, faz com que todos os parametros(:id) sejam passados por props pro componente Usuario, logo, podes criar uma prop chamada id.
            children: [
                {
                    path: '',
                    component: UsuarioLista
                },
                {
                    path: ':id',
                    component: UsuarioDetalhe,
                    props: true
                },
                {
                    path: ':id/editar',
                    component: UsuarioEditar,
                    props: true,
                    name: 'editarUsuario'
                }
            ]
        }
    ]
})