<!-- (lista de propiedades de ejemplo) -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <PropertyCard
      v-for="prop in properties"
      :key="prop.id"
      :title="prop.title"
      :location="prop.location"
      :price="prop.price"
      :image="prop.image"
    />
  </div>
</template>

<script setup>
import PropertyCard from './PropertyCard.vue'

const properties = [
  {
    id: 1,
    title: 'Departamento en Polanco',
    location: 'CDMX, México',
    price: '$15,000 / mes',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Casa en Condesa',
    location: 'CDMX, México',
    price: '$25,000 / mes',
    image: 'https://images.unsplash.com/photo-1501183638714-3c4b3f74f5b9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Loft en Roma Norte',
    location: 'CDMX, México',
    price: '$18,000 / mes',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
  },
]
</script>
