<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-white mb-6">Explorar Arriendos</h2>
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="item in arriendos"
        :key="item.id"
        class="bg-[#162556] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
        <img
          :src="item.imagen"
          alt="Imagen del arriendo"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-white">{{ item.titulo }}</h3>
          <p class="text-gray-300">Sector: {{ item.sector }}</p>
          <p class="text-blue-400 font-bold mt-2">$ {{ item.precio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
const arriendos = [
  {
    id: 1,
    titulo: 'Departamento moderno',
    sector: 'Centro',
    precio: '8,500',
    imagen: '/src/assets/arriendo1.jpg',
  },
  {
    id: 2,
    titulo: 'Casa familiar con patio',
    sector: 'Sur',
    precio: '12,000',
    imagen: '/src/assets/arriendo2.jpg',
  },
  {
    id: 3,
    titulo: 'Estudio minimalista',
    sector: 'Norte',
    precio: '6,000',
    imagen: '/src/assets/arriendo3.jpg',
  },
  {
    id: 4,
    titulo: 'Departamento amoblado',
    sector: 'Centro',
    precio: '10,000',
    imagen: '/src/assets/arriendo4.jpg',
  },
  {
    id: 5,
    titulo: 'Loft artístico',
    sector: 'Este',
    precio: '9,200',
    imagen: '/src/assets/arriendo5.jpg',
  },
  {
    id: 6,
    titulo: 'Casa de lujo',
    sector: 'Norte',
    precio: '18,500',
    imagen: '/src/assets/arriendo6.jpg',
  },
  {
    id: 7,
    titulo: 'Apartamento económico',
    sector: 'Sur',
    precio: '5,500',
    imagen: '/src/assets/arriendo7.jpg',
  },
  {
    id: 8,
    titulo: 'Dúplex moderno',
    sector: 'Oeste',
    precio: '11,000',
    imagen: '/src/assets/arriendo8.jpg',
  },
  {
    id: 9,
    titulo: 'Mini estudio',
    sector: 'Centro',
    precio: '4,800',
    imagen: '/src/assets/arriendo9.jpg',
  },
  {
    id: 10,
    titulo: 'Penthouse con terraza',
    sector: 'Norte',
    precio: '22,000',
    imagen: '/src/assets/arriendo10.jpg',
  },
  {
    id: 11,
    titulo: 'Casa colonial',
    sector: 'Centro Histórico',
    precio: '13,700',
    imagen: '/src/assets/arriendo11.jpg',
  },
  {
    id: 12,
    titulo: 'Departamento nuevo',
    sector: 'Este',
    precio: '9,000',
    imagen: '/src/assets/arriendo12.jpg',
  },
]
</script>
