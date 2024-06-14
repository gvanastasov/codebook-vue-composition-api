import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './pages/p-home.vue'
import About from './pages/p-about.vue'

/**
 * Define the routes for the application (client side routing)
 */
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

/**
 * Create the router instance
 */
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
