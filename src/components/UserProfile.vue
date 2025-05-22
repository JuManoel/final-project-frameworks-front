<template>
  <div class="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg text-white" style="background-color: #162556;">
    <!-- Imagen de usuario -->
    <div class="flex justify-center mb-6">
      <div class="w-24 h-24 rounded-full bg-[#1d2f70] flex items-center justify-center text-white text-3xl">
        ♘
      </div>
    </div>

    <h2 class="text-2xl font-bold mb-6 text-center">Perfil de Usuario</h2>

    <form class="space-y-5">
      <!-- ID de Usuario -->

      <!-- Nombre -->
      <div>
        <label class="block mb-1 text-gray-300" for="name">Nombre Completo</label>
        <input
          id="name"
          type="text"
          class="w-full px-4 py-2 rounded bg-[#1a2c4e] border border-[#2f477a] text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Juan Pérez"
          disabled
        />
      </div>

      <!-- Correo -->
      <div>
        <label class="block mb-1 text-gray-300" for="email">Correo Electrónico</label>
        <input
          id="email"
          type="email"
          class="w-full px-4 py-2 rounded bg-[#1a2c4e] border border-[#2f477a] text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="juan@example.com"
          disabled
        />
      </div>
      <!-- Reputación con estrellas -->
<div class="mb-6 text-center">
  <p class="text-gray-300 mb-1">Nivel de reputación</p>
  <div class="flex justify-center space-x-1 text-yellow-400 text-2xl">
    <span v-for="i in 5" :key="i">
      <span v-if="i <= reputacion">★</span>
      <span v-else class="text-gray-500">☆</span>
    </span>
  </div>
  <p class="text-sm text-gray-400 mt-1">{{ reputacion }} / 5</p>
</div>


    </form>
  </div>
</template>
<script setup>
const reputacion = 4 // Cambia esto dinámicamente si luego conectas a backend
</script>

