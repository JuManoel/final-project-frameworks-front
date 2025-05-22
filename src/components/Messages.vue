<template>
  <div class="w-full max-w-4xl mx-auto h-[80vh] flex rounded-lg shadow-lg overflow-hidden bg-[#162556] text-white">
    <!-- Barra lateral (contactos) -->
    <aside class="w-1/3 bg-[#1d2f70] p-3 overflow-y-auto">
      <h2 class="text-lg font-bold mb-3">Contactos</h2>
      <ul class="space-y-2">
        <li
          v-for="contact in contacts"
          :key="contact.id"
          @click="selectContact(contact)"
          :class="[
            'cursor-pointer px-3 py-2 rounded-md transition-colors',
            selectedContact.id === contact.id ? 'bg-blue-700' : 'hover:bg-blue-600'
          ]"
        >
          {{ contact.name }}
        </li>
      </ul>
    </aside>

    <!-- Área de chat -->
    <section class="flex-1 flex flex-col p-3">
      <h2 class="text-lg font-bold mb-2 border-b border-white pb-1">
        {{ selectedContact.name }}
      </h2>

      <!-- Conversación -->
      <div class="flex-1 overflow-y-auto py-2 space-y-2">
        <div
          v-for="msg in filteredMessages"
          :key="msg.id"
          :class="[
            'max-w-[70%] px-3 py-2 rounded-xl shadow-sm text-sm',
            msg.sender === currentUser
              ? 'bg-blue-600 self-end text-white rounded-br-none ml-auto'
              : 'bg-gray-600 self-start text-white rounded-bl-none'
          ]"
        >
          <p class="mb-1">{{ msg.content }}</p>
          <p class="text-xs text-gray-300 text-right">{{ msg.date }}</p>
        </div>
      </div>

      <!-- Input de mensaje -->
      <div class="mt-3 flex gap-2">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Escribe un mensaje..."
          class="flex-1 px-3 py-2 rounded-full bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="enviarMensaje"
          class="px-4 py-2 bg-blue-600 rounded-full text-white"
        >
          Enviar
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentUser = 'Yo'

const contacts = [
  { id: 1, name: 'Arrendador 1' },
  { id: 2, name: 'Arrendador 2' },
]

const selectedContact = ref(contacts[0])

const messages = ref([
  {
    id: 1,
    sender: 'Arrendador 1',
    receiver: 'Yo',
    content: 'Hola, ¿estás interesado en el departamento?',
    date: '2025-05-19 15:34',
  },
  {
    id: 2,
    sender: 'Yo',
    receiver: 'Arrendador 1',
    content: 'Sí, me gustaría saber más detalles.',
    date: '2025-05-19 16:00',
  },
  {
    id: 3,
    sender: 'Arrendador 2',
    receiver: 'Yo',
    content: 'Hola, tengo un nuevo cuarto disponible.',
    date: '2025-05-19 17:00',
  },
])

const newMessage = ref('')

const filteredMessages = computed(() =>
  messages.value.filter(
    (msg) =>
      (msg.sender === selectedContact.value.name && msg.receiver === currentUser) ||
      (msg.receiver === selectedContact.value.name && msg.sender === currentUser)
  )
)

function selectContact(contact) {
  selectedContact.value = contact
}

function enviarMensaje() {
  if (newMessage.value.trim() === '') return

  messages.value.push({
    id: Date.now(),
    sender: currentUser,
    receiver: selectedContact.value.name,
    content: newMessage.value.trim(),
    date: new Date().toLocaleString(),
  })

  newMessage.value = ''
}
</script>
