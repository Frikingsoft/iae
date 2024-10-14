<template>
    <q-drawer
        v-model="abrir_menu"
        show-if-above
        :mini="mostrar_menu"
        @mouseenter="mostrar_menu = false"
        @mouseleave="mostrar_menu = true"
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            
              
            
          <q-item  active clickable v-ripple>
              <q-item-section avatar>
                 <q-icon name="fas fa-circle-user" color="white"/>
              
              </q-item-section>   
               <q-item-section class="text-white">
                    No Registrado
                </q-item-section> 
          </q-item>     
          <q-separator color="white" class="q-mb-md"/>
            <q-item  active clickable v-ripple v-for="(boton, index) in botones" :key="index">
              <q-item-section avatar>
                <q-icon :name="boton.icono" color="white"/>
              </q-item-section>

              <q-item-section class="text-white">
                {{ boton.nombre }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>
</template>
<script setup>
    import { ref } from "vue"
    const abrir_menu = ref(false)
    const mostrar_menu = ref(true)
    const botones = ref([
        {nombre:"Inicio",icono:"fas fa-building-user",ruta:"/inicio"},
        {nombre:"Noticias",icono:"fas fa-newspaper",ruta:"/noticias"},
        {nombre:"Cursos",icono:"fas fa-graduation-cap", ruta:"/cursos"},
        {nombre:"Iniciar sesión", icono:"fas fa-user", ruta:"/iniciar"},
        {nombre:"Contacto", icono:"fas fa-address-book", ruta:"/contacto"}
    ])
    
</script>
<style scoped>
   .fit{
      background-color: rgb(13, 50, 109);
    }
    
</style>