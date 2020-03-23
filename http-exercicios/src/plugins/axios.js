import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-ca14e.firebaseio.com/'

//Enviando authorization padrão com axios
// axios.defaults.headers.common['Authorization'] = '123'

//Diz que no metodo get, só aceita respostas json.
// axios.defaults.headers.get['Accepts'] = 'application/json'


Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-ca14e.firebaseio.com/',
            headers: {
                // get: {
                //     Authorization: 'abc123'
                // },
                Authorization: 'abc123'
            }
        });
        Vue.prototype.$apiGoogle = axios.create({
            baseURL: 'api_do_google'
        });

        //Interceptar requisições
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promise.reject(error));

        //Interceptar respostas
        Vue.prototype.$http.interceptors.response.use(response => {
            // let array = []
            // for (let chave in response.data) {
            //     array.push({ id: chave, ...response.data[chave] })
            // }

            // response.data = array
            return response
        }, error => Promise.reject(error));
    }
})