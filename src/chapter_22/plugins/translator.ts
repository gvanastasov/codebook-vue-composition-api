import type { App, Plugin } from 'vue'

export default {
  install: (app: App, options: any) => {
    app.config.globalProperties.$translate = (key: string) => {
        return key.split('.').reduce((o, i) => {
          if (o) return o[i]
        }, options)
      }
  }
} as Plugin
