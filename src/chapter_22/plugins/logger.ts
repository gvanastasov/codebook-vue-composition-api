import type { App, Plugin } from 'vue'

export default {
  install: (app: App, options: any) => {
    app.config.globalProperties.$log = function (...args: any[]) {
      console.log(...args)
    }
  }
} as Plugin
