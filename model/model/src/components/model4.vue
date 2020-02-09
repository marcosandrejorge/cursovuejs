<template>
   <div>
      <label>MODEL 4:</label>
      <input :value="value.nome" @input="retornarNome($event)" type="text" name="nome4" id="nome4"/>
      <input :value="value.email" @input="retornarEmail($event)" type="text" name="email4" id="email4"/>
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
   methods:{
      retornarNome(event){
         this.$emit('input', {
            nome: event.target.value,
            email: this.value.email
         });
      },
      retornarEmail(event){
         this.$emit('input', {
            nome: this.value.nome,
            email: event.target.value
         });
      }
   }
}
</script>