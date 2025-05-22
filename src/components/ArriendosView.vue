<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold text-white mb-6">Explorar Arriendos</h2>
    
    <!-- Tabulator table -->
    <div id="houses-table"></div>

    <!-- Loading state -->
    <div v-if="loading" class="text-center py-8 text-white">
      Cargando...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getHouses } from '../api/house'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import "tabulator-tables/dist/css/tabulator.min.css"

// Estado
const houses = ref([])
const loading = ref(false)
let table = null

// Configuración de Tabulator
const tableConfig = {
  height: "600px",
  layout: "fitColumns",
  pagination: true,
  paginationMode: "remote",
  paginationSize: 15,
  paginationSizeSelector: [15, 30, 50],
  columns: [
    { title: "Descripción", field: "description", sorter: "string", width: "30%" },
    { title: "Propietario", field: "nameOwener", sorter: "string", width: "20%" },
    { title: "Email", field: "emailOwener", sorter: "string", width: "20%" },
    {
      title: "Calificación",
      field: "stars",
      sorter: "number",
      width: "15%",
      formatter: function(cell) {
        const value = cell.getValue()
        return `<span style="color: #FBBF24">★</span> ${value}`
      }
    },
    {
      title: "Dirección",
      field: "addressData",
      width: "15%",
      formatter: function(cell) {
        const address = cell.getValue()
        if (!address) return "";
        return `${address.street}, ${address.city}`
      }
    }
  ],
  ajaxURL: "http://localhost:8080/house",
  ajaxConfig: {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  },
  paginationDataReceived: {
    "last_page": "totalPages",
    "total": "totalElements",
    "current_page": "number",
    "data": "content"
  },
  ajaxResponse: function(url, params, response) {
    console.log('API Response:', response); // Para debugging
    return {
      last_page: response.totalPages,
      current_page: response.number,
      total: response.totalElements,
      data: response.content.map(item => ({
        ...item,
        id: item.idHouse // Map idHouse to id for Tabulator
      }))
    };
  },
  ajaxParams: function(url, config, params = {}) {
    return {
      page: params.page || 0,
      size: params.size || 15,
      sort: params.sort || ""
    };
  }
}

// Inicializar Tabulator
const initTable = () => {
  table = new Tabulator("#houses-table", {
    ...tableConfig,
    theme: "midnight",
    rowFormatter: function(row) {
      row.getElement().style.backgroundColor = "#162556";
      row.getElement().style.color = "white";
    }
  });
  table.on("dataLoaded", function(data) {
    console.log("Datos cargados de la petición:", data);
  });
  // Add table events for debugging
  table.on("pageLoaded", function(pageno) {
    console.log("Page Loaded:", pageno);
  });

  table.on("ajaxError", function(error) {
    console.error("Ajax Error:", error);
  });
}

onMounted(() => {
  initTable()
})
</script>

<style>
/* Estilos personalizados para Tabulator */
.tabulator {
  background-color: #1a1f3c !important;
  border: 1px solid #2d3a7d !important;
}

.tabulator-header {
  background-color: #162556 !important;
  color: white !important;
}

.tabulator-footer {
  background-color: #162556 !important;
  color: white !important;
}

.tabulator-page {
  background-color: #1c398e !important;
  color: white !important;
  border: none !important;
}

.tabulator-page.active {
  background-color: #3a59c1 !important;
}

.tabulator-cell {
  color: white !important;
}
</style>
