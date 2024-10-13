<template>
    <div class="menu flex flex-center">
        <nav>
            <router-Link :to="boton.ruta"
            
            v-for="(boton,index) in botones" :key="index">
                 <q-icon :name="boton.icono" color="white" size="40px" class="q-mb-xl"/>
            </router-Link>
        </nav>
    </div>
</template>
<script setup>
    import { ref } from "vue";
    const botones = ref([
        {nombre:"Inicio",icono:"fas fa-house-user",ruta:"/"},
        {nombre:"Login",icono:"fas fa-house-user",ruta:"/login"},
        {nombre:"Registro",icono:"fas fa-house-user",ruta:"/registro"},
    ])
</script>
<style scoped>
   .menu{
    width: 64px;
    height: 100vh;
    background-color: rgb(13, 50, 109);
    position: fixed;
    z-index: 1;
    top: 0;
   }
</style>