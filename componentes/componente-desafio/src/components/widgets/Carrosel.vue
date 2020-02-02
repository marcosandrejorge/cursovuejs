<template>
   <v-carousel>
      <v-carousel-item
         v-for="(item,i) in fotos"
         :key="i"
         :src="item.src">
      </v-carousel-item>
   </v-carousel>
</template>

<script>
export default {
   props: {
      fotos: {
         Type: Array,
         defaull: ()=> {
            return []
         }
      }
   }
}
</script>