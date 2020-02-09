<template>
   <div>
      <label>MODEL 5:</label>
      <input v-model="objPessoa.nome" @input="retornar()" type="text" name="nome5" id="nome5"/>
      <input v-model="objPessoa.email" @input="retornar()" type="text" name="email5" id="email5"/>
   </div>
</template>

<script>
export default {
   props:{
      value: {
         type: Object,
         required: true,
         default: ""
      }
   },
   data(){
      return{
         objPessoa: {}
      }
   },
   methods:{
      retornar(){
         this.$emit('input', this.objPessoa);
      }
   },
   mounted(){
      this.objPessoa = {...this.value}
   },
   watch:{
      value:{
         deep: true,
         handler(){
            this.objPessoa = {...this.value}
         }
      }
   }
}
</script>