<template>
    <q-page class="row justify-center">
        <q-card class="row justify-center items-center col-xs-12 col-md-6 col-xl-4 my-card formulario">
            <q-card class="col-6 coso">
                <q-input class="col-6" v-model="usuario" :dense="dense">
                    <template v-slot:append>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                        </q-avatar>
                    </template>
                </q-input>
            </q-card>
        </q-card> 
       
    </q-page>   
</template>
<script setup>
    import { ref } from "vue"
    const usuario = ref("")
</script>
<style scoped>
    .my-card{
       box-shadow: none;
    }
    .coso{
        background-color: blueviolet;
        height: 40vh;
    }
</style>