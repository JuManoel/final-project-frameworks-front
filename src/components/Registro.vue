<template>
  <div class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div class="bg-blue-950 p-10 rounded-2xl w-96 max-w-full border border-blue-700 relative">
      <button @click="$emit('cerrarRegistro')" class="absolute top-3 right-3 text-white text-xl font-bold hover:text-blue-400">&times;</button>
      
      <h2 class="text-3xl font-extrabold mb-8 text-center text-white">Crear Cuenta</h2>
      
      <form @submit.prevent="registrarUsuario" class="space-y-6">
        <div>
          <label class="block text-blue-300 mb-2" for="name">Nombre Usuario</label>
          <input
            v-model="name"
            type="name"
            id="name"
            required
            class="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-600
                   text-white placeholder-blue-400
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="nombre"
          />
        </div>
        <div>
          <label class="block text-blue-300 mb-2" for="email">Correo electrónico</label>
          <input
            v-model="email"
            type="email"
            id="email"
            required
            class="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-600
                   text-white placeholder-blue-400
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div>
          <label class="block text-blue-300 mb-2" for="password">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            required
            class="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-600
                   text-white placeholder-blue-400
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="********"
          />
        </div>

        <div>
          <label class="block text-blue-300 mb-2" for="role">Tipo de usuario</label>
          <select
            v-model="role"
            id="role"
            required
            class="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-600
                   text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option disabled value="">Selecciona un tipo</option>
            <option value="arrendatario">Arrendatario</option>
            <option value="arrendador">Arrendador</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 transition-colors
                 py-3 rounded-lg font-semibold text-white"
        >
          Crear cuenta
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const role = ref('')

function registrarUsuario() {
  if (!email.value || !password.value || !role.value) {
    alert('Por favor completa todos los campos')
    return
  }

  // Aquí la lógica de creación de usuario (API, backend)
  alert(`Creando usuario con email: ${email.value} y rol: ${role.value}`)

  // Opcional: limpiar campos después de registro exitoso
  email.value = ''
  password.value = ''
  role.value = ''

  // Emitir evento para cerrar el modal
  // (aquí se hace con emit que el padre maneja)
}
</script>
