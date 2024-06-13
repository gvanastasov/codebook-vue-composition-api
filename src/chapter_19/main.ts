import { createApp } from 'vue'

import App from './App.vue'
import { myAppKey } from './provide/keys'

const app = createApp(App)

app.provide(myAppKey, 'Global injected state...').mount('#app')
