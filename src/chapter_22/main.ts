import { createApp } from 'vue'

import App from './App.vue'

import LoggerPlugin from './plugins/logger'
import TranslatorPlugin from './plugins/translator'

const app = createApp(App)

app
  .use(LoggerPlugin)
  .use(TranslatorPlugin, {
    EN: { hello: 'Hello' },
    DK: { hello: 'Hej' }
  })
  .mount('#app')
