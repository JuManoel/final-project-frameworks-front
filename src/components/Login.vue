<template>
  <div>
    <header class="w-full bg-blue-900 bg-opacity-80 shadow-md py-4 px-6 flex items-center fixed top-0 left-0 z-50">
      <h1 class="text-2xl font-bold tracking-wide">ForanRoom★</h1>
    </header>

    <main class="flex-grow flex items-center justify-center pt-20 px-6 ">
      <div class="w-120 max-w-5xl bg-blue-950 p-20 rounded-2xl border border-blue-700 flex">
        <form class="flex-1 flex flex-col justify-center" @submit.prevent="login">
          <h2 class="text-3xl font-extrabold mb-8 text-center text-white">Iniciar Sesión</h2>

          <div class="mb-6">
            <label class="block text-blue-300 mb-2" for="email">Correo electrónico</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-600
                     text-white placeholder-blue-400
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="tucorreo@ejemplo.com"
              autocomplete="email"
              required
            />
          </div>

          <div class="mb-8">
            <label class="block text-blue-300 mb-2" for="password">Contraseña</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-600
                     text-white placeholder-blue-400
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="********"
              autocomplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 transition-colors
                   py-3 rounded-lg font-semibold text-white"
          >
            Iniciar sesión
          </button>

          <p class="mt-4 text-center text-blue-400">
            ¿No tienes cuenta?
            <button @click="mostrarRegistro = true" class="underline hover:text-blue-200">Regístrate</button>
          </p>
        </form>
      </div>

      <Registro v-if="mostrarRegistro" @cerrarRegistro="mostrarRegistro = false" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Registro from './Registro.vue'

const email = ref('')
const password = ref('')
const mostrarRegistro = ref(false)

function login() {
  // Aquí va la lógica real de login (llamada al backend, etc)
  alert(`Iniciando sesión con ${email.value}`)
}
</script>
