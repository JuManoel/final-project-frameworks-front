<template>
  <div
    class="h-screen w-screen flex bg-cover bg-center bg-no-repeat text-white overflow-hidden"
    style="background-image: url('/src/assets/background-login.jpg');"
  >
    <!-- Botón hamburguesa -->
    <button
      class="fixed bottom-4 left-4 z-50 bg-[#1c398e] p-2 rounded-md focus:outline-none"
      @click="menuAbierto = !menuAbierto"
    >
      ☰
    </button>

    <!-- Menú lateral -->
    <nav
      :class="[
        'fixed top-0 left-0 h-screen w-64 p-6 flex flex-col gap-6 z-40 transition-transform duration-300',
        menuAbierto ? 'translate-x-0' : '-translate-x-full'
      ]"
      style="background-color: #1c398e;"
    >
      <h2 class="text-2xl font-bold mb-8">ForanRoom★</h2>
      
      <!-- User Info Section -->
      <div class="mb-6 p-4 bg-[#162556] rounded-lg">
        <p class="text-lg font-semibold">{{ userData?.name || 'Usuario' }}</p>
        <!-- <p class="text-sm text-gray-300">{{ userData?.email }}</p> -->
        <p class="text-xs text-blue-300 mt-1">{{ userData?.typeUser }}</p>
      </div>

      <button
        @click="irA('profile')"
        :class="buttonClass('profile')"
        style="background-color: #162556;"
      >
        Perfil
      </button>
      <button
        @click="irA('messages')"
        :class="buttonClass('messages')"
        style="background-color: #162556;"
      >
        Mensajes
      </button>
      <button
  @click="irA('arriendos')"
  :class="buttonClass('arriendos')"
  style="background-color: #162556;"
>
  Explorar Arriendos    
</button>

      <!-- Add logout button -->
      <button
        @click="handleLogout"
        class="mt-auto text-left px-4 py-3 rounded-lg transition-colors text-white bg-red-600 hover:bg-red-700"
      >
        Cerrar Sesión
      </button>
    </nav>

    <!-- Contenido principal -->
    <main
  class="flex-grow overflow-y-auto px-20 overflow-x-hidden transition-all duration-300"
  :class="{ 'ml-64': menuAbierto }"
>
  <div class="max-w-screen-xl mx-auto">
    <component :is="currentViewComponent" />
  </div>
</main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import UserProfile from './UserProfile.vue'
import Messages from './Messages.vue'
import ArriendosView from './ArriendosView.vue'

const router = useRouter()
const currentView = ref('profile')
const menuAbierto = ref(true)
const userData = ref(null)

onMounted(() => {
  // Get user data from localStorage
  const storedUserData = localStorage.getItem('userData')
  if (storedUserData) {
    userData.value = JSON.parse(storedUserData)
  } else {
    // Redirect to login if no user data is found
    router.push('/')
  }
})

const handleLogout = () => {
  localStorage.removeItem('userData')
  localStorage.removeItem('token')
  router.push('/')
}

const currentViewComponent = computed(() => {
  if (currentView.value === 'profile') return UserProfile
  if (currentView.value === 'messages') return Messages
  if (currentView.value === 'arriendos') return ArriendosView
  return UserProfile
})

function irA(view) {
  currentView.value = view
}

function buttonClass(view) {
  return [
    'text-left px-4 py-3 rounded-lg transition-colors',
    'text-white',
    currentView.value === view
      ? 'bg-[#3a59c1] hover:bg-[#4b6cd7]'  // Botón activo (azul claro)
      : 'bg-[#163174] hover:bg-[#274c9c]'  // Botón inactivo (azul oscuro)
  ]
}
</script>
