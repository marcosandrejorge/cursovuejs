<template>
   <div>
      <label>MODEL 2:</label>
      <input v-model="nome" type="text" name="nome2" id="nome2"/>
   </div>
</template>

<script>
export default {
   props:{
      value: {
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
      this.nome = this.value
   },

   watch: {
      value(){
         if (this.value == this.nome) return;
         this.nome = this.value
      },
      nome(){
         this.$emit('input', this.nome)
      }
   }
}
</script>