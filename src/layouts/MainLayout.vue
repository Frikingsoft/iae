<template>
  <q-layout view="lHh Lpr lFf" class="pagina">
    <Menu overlay/>
    <q-page-container>
      <div class="logo">
         <img class="logo_utu" src="/logoutu.png">
        
        <h3 class="texto"> Instituto de Alta Especialización </h3>
       <img class="logo_iae" src="/iae.png">
      </div>
      
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import Menu from "../components/Menu.vue"

defineOptions({
  name: 'MainLayout'
})


const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style scoped>
  .pagina{
    background-color: rgba(229, 229, 229, 0.517);
  }
  .logo{
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  .logo_utu{
    width: 20%;
    height: 50%;
    margin-left: 64px;
  }
  .logo_iae{
    width: 20%;
    height: 50%;
    margin-right: 64px;
    padding-left: 70px;
    padding-right: 70px;
  }
  .texto{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-weight: bold;
    color: rgb(13, 50, 109);
    text-shadow: 1px 1px 3px rgb(255, 255, 255), 2px 2px 4px rgb(13, 50, 109), 3px 3px 1px rgb(0, 0, 0);
  }
</style>