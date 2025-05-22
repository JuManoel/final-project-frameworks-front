<!--  (tarjeta de propiedad) -->
<template>
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img :src="image" alt="" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-bold mb-1">{{ title }}</h3>
      <p class="text-sm text-gray-400 mb-2">{{ location }}</p>
      <p class="text-blue-400 font-semibold">{{ price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  location: String,
  price: String,
  image: String,
})
</script>
