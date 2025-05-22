<template>
  <div>
    <header class="bg-opacity-80 fixed top-0 left-0 z-50 flex w-full items-center bg-blue-900 px-6 py-4 shadow-md">
      <h1 class="text-2xl font-bold tracking-wide">ForanRoom★</h1>
    </header>

    <main class="flex flex-grow items-center justify-center px-6 pt-20">
      <div class="flex w-120 max-w-5xl rounded-2xl border border-blue-700 bg-blue-950 p-20">
        <form class="flex flex-1 flex-col justify-center" @submit.prevent="handleLogin">
          <h2 class="mb-8 text-center text-3xl font-extrabold text-white">Iniciar Sesión</h2>

          <div class="mb-6">
            <label class="mb-2 block text-blue-300" for="email">Correo electrónico</label>
            <input v-model="email" type="email" id="email" class="w-full rounded-lg border border-blue-600 bg-blue-800 px-4 py-3 text-white placeholder-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="tucorreo@ejemplo.com" autocomplete="email" required />
          </div>

          <div class="mb-8">
            <label class="mb-2 block text-blue-300" for="password">Contraseña</label>
            <input v-model="password" type="password" id="password" class="w-full rounded-lg border border-blue-600 bg-blue-800 px-4 py-3 text-white placeholder-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="********" autocomplete="current-password" required />
          </div>

          <p v-if="error" class="mb-4 text-center text-red-500">{{ error }}</p>

          <p v-if="error" class="mb-4 text-center text-red-500">{{ error }}</p>

          <button type="submit" class="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700">Iniciar sesión</button>
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
import { useRouter } from 'vue-router'
import Registro from './Registro.vue'
import { login } from '../api/login'

const router = useRouter()
const email = ref('')
const password = ref('')
const mostrarRegistro = ref(false)
const error = ref('')

async function handleLogin() {
  try {
    const result = await login(email.value, password.value)

    if (result.success) {
      // Store user data if needed
      localStorage.setItem('userData', JSON.stringify(result.data))
      
      // Navigate to dashboard
      router.push('/dashboard')
    } else {
      error.value = result.error
    }
  } catch (e) {
    error.value = 'Error al intentar iniciar sesión'
  }
}
</script>
