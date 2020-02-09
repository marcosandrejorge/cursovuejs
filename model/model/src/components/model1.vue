<template>
   <div>
      <label>MODEL 1:</label>
      <input v-model="nome" type="text" name="nome1" id="nome1"/>
   </div>
</template>

<script>
export default {
   model:{
      prop: 'nomeModel',
      event: 'change-nome'
   },
   props:{
      nomeModel: {
         type: String,
         required: true,
         default: ""
      }
   },

   data(){
      return {
         nome: "",
      }
   },

   mounted(){
      this.nome = this.nomeModel
   },

   watch: {
      nomeModel(){
         if (this.nomeModel == this.nome) return;
         this.nome = this.nomeModel
      },
      nome(){
         this.$emit('change-nome', this.nome)
      }
   }
}
</script>