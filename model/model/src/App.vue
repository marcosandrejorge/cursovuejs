<template>
  <div id="app">
     <Model1 v-model="nome_model_1"/>
     <Model2 v-model="nome_model_2"/>
     <Model3 v-model="nome_model_3"/>
     <Model4 v-model="nome_model_4"/>
     <Model5 v-model="nome_model_5"/>
  </div>
</template>

<script>
import Model1 from './components/model1.vue'
import Model2 from './components/model2.vue'
import Model3 from './components/model3.vue'
import Model4 from './components/model4.vue'
import Model5 from './components/model5.vue'
   export default {
      name: 'App',
      components: {
         Model1,
         Model2,
         Model3,
         Model4,
         Model5
      },
      data(){
         return{
            nome_model_1: 'Marcos',
            nome_model_2: 'Andre',
            nome_model_3: 'Jorge',
            nome_model_4: {
               nome: "Marcos",
               email: "marcos@gmail.com"
            },
            nome_model_5: {
               nome: "Jorge",
               email: "jorge@gmail.com"
            },
         }
      }
   }
</script>

<style>

</style>
