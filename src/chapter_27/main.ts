import { createApp } from 'vue'
import router from './router.ts'
import App from './App.vue'

const app = createApp(App)

/**
 * Add the router middleware to the application
 * This will enable client side routing
 * To learn more about routing in Vue 3, visit: https://router.vuejs.org/guide/
 */
app.use(router).mount('#app')
