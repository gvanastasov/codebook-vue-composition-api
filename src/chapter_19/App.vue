<template>
  <div class="container">
    <h1>Provide & Inject</h1>
    <!-- 
      When having a more complex hierarchy of components, it can be cumbersome
      to pass props and events through multiple layers of components. This is
      where the provide and inject APIs come in handy.

      The provide and inject APIs allow you to provide a value in a parent component
      and inject it in a child component, regardless of the nesting level.

      We can also provide state on application level (check main.ts), usufull for
      plugins or global state management.
    -->
    <c-parent />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import CParent from './components/c-parent.vue'

const message = ref('Root injected state...')

function updateMessage() {
  message.value = 'Updated state from App.vue...'
}

/**
 * Its a good practice to define the keys in a separate file.
 */
import { myRootKey } from './provide/keys'

/**
 * The provide and inject APIs are not reactive. This means that if the provided
 * value changes, the child component will not be re-rendered. If you need reactivity,
 * you should use reactive or ref.
 *
 */
provide(myRootKey, { message, updateMessage })
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  flex-direction: column;
}

.blue {
  color: blue;
}
</style>
