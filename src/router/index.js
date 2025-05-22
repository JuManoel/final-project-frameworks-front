import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import UserDashboard from '../components/UserDashboard.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: UserDashboard },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
