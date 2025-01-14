<template>
  <section class="h-screen flex justify-center items-center flex-col bg-cover landscape:bg-[url('../assets/img/fondo_personajes.png')]">
    <h1 class="text-center text-white text-5xl p-2 font-bold">SCHOOL FIGHTER 2</h1>
    <p class="w-[60%] text-center text-white p-5">El mejor juego de lucha entre alumnos. Selecciona los alumnos que van a darse de hostias.</p>
    <div class="flex w-full justify-center items-center gap-6">
      <select v-model="personaje1" class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-1/3 p-2.5">
        <option disabled value="">Selecciona un personaje</option>
        <option v-for="(personaje, index) in personajes" :key="index" :value="index">{{personaje.nombre}}</option>
      </select>
      <select v-model="personaje2" class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-1/3 p-2.5">
        <option disabled value="">Selecciona un personaje</option>
        <option v-for="(personaje, index) in personajes" :key="index" :value="index">{{personaje.nombre}}</option>
      </select>
    </div>
    <div class="flex justify-center my-5">
      <button @click="$router.push('/escenarios')" class="bg-[#3DBC1E] text-white px-4 py-2 rounded font-bold">Continuar</button>
    </div>
  </section>
</template>

<script>
import { personajes } from '@/db/db.js';
export default {
  name: 'VistaPersonajes',
  data() {
    return {
      personajes: personajes,
      personaje1: '',
      personaje2: '',
    };
  },
};
</script>
