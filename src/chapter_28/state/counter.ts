import { reactive } from 'vue'

/**
 * In the given example we use the reactive function from Vue 3 to create a reactive object.
 * This will work in simple cases, but might cause troubles when:
 *  - the state object is more complex
 *  - the application type is SSR (in which case this object will be shared between requests)
 *
 * A better approach would be to use dedicated library for state management, like Vuex or Pinia.
 * Explaining those is beyound the scope of this codebase.
 */

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  }
})
