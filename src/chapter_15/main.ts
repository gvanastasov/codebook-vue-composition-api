import { createApp } from 'vue'

import App from './App.vue'
import CGlobal from './components/c-global.vue'

const app = createApp(App)

/**
 * Registering a global component
 *
 * These components are available in all components of the application.
 * They can be used in the template of any component without the need to import them.
 * They are registered using the app.component method.
 * The first argument is the name of the component and the second argument is the component object.
 */
app
  .component('c-global', CGlobal)

  /**
   * We can also inline register component
   *
   * REMINDER: for this to work we need to include vue runtime
   * compiler in our project (the thing that knows how to generate
   * a component out of a template).
   */
  .component('c-global-inline', { template: '<div>Global Inline Component</div>' })

app.mount('#app')
