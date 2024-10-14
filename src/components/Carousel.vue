<template>
    <div class="q-pa-md col-8">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      autoplay 
     :interval="3000" 
      infinite
      class="carousel"
    >
      <q-carousel-slide  v-for="(foto,index) in fotos" :key="index"
      :name="foto.nombre" :img-src="foto.foto"/>
     
    </q-carousel>
  </div>
</template>
<script setup>
    import { ref } from "vue"
    const slide = ref(1)
    const fotos = ref([
        {nombre:1,tipo:"imagen",foto:"/IAE/fondo1.jpg"},
        {nombre:2,tipo:"imagen",foto:"/IAE/fondo2.jpg"},
        {nombre:3,tipo:"imagen",foto:"/IAE/fondo3.jpg"},
        {nombre:4,tipo:"imagen",foto:"/IAE/fondo4.jpg"},
        {nombre:5,tipo:"imagen",foto:"/IAE/fondo5.jpg"},
     
    ])
</script>

<style scoped>
    .carousel{
         box-shadow: 1px 1px 1px rgb(73, 73, 73),2px 2px 2px rgb(255, 255, 255),
  3px 3px 3px rgb(42, 41, 41),4px 4px 2px rgb(255, 255, 255),5px 5px 2px rgb(15, 15, 15);
  border-left: 1px solid rgba(151, 151, 151, 0.3);
  border-top: 1px solid rgba(151, 151, 151, 0.3);
  
    }
</style>