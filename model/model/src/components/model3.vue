<template>
   <div>
      <label>MODEL 3:</label>
      <input :value="value" @input="retornarNome($event)" type="text" name="nome3" id="nome3"/>
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
   methods:{
      retornarNome(event){
         this.$emit('input', event.target.value);
      }
   }
}
</script>