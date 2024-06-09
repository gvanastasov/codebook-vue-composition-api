import { createApp } from 'vue'

/**
 * Main entry point of the application or usually
 * reffered to as root component.
 */
import App from './App.vue'

/**
 * Creating the app instance.
 */
const app = createApp(App)

/**
 * Mounting the application to DOM element via selector.
 * This will trigger the lifecycle hooks of the application
 * and render the application to the DOM.
 */
app.mount('#app')
