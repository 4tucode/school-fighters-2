<template>
    <section class="h-screen flex justify-center items-center flex-col bg-cover landscape:bg-[url('../assets/img/fondo_personajes.png')]">
      <h1 class="text-center text-white text-5xl p-2 font-bold">SCHOOL FIGHTER 2</h1>
      <p class="w-[60%] text-center text-white p-5">El mejor juego de lucha entre alumnos. Selecciona el escenario que más te guste.</p>
      <div class="flex w-full justify-center items-center gap-6">
        <select v-model="escenarioSeleccionado" class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-1/3 p-2.5">
          <option disabled value="">Selecciona un escenario</option>
          <option v-for="(escenario, index) in escenarios" :key="index" :value="index">{{escenario.nombre}}</option>
        </select>
      </div>
      <div class="flex justify-center my-5 gap-6">
        <button @click="$router.push('/')" class="bg-[#BC431E] text-white px-4 py-2 rounded font-bold">Volver</button>
        <button @click="$router.push('/combate')" class="bg-[#3DBC1E] text-white px-4 py-2 rounded font-bold">Combate</button>
      </div>
    </section>
  </template>
  
  <script>
  import { escenarios } from '@/db/db.js'
  export default {
    name: 'VistaPersonajes',
    data() {
      return {
        escenarios: escenarios,
        escenarioSeleccionado: ''
      }
    },
  };
  </script>
  