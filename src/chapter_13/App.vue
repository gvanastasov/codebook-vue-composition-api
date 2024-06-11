<template>
  <div class="container">
    <h1>Registration</h1>
    <!-- 
      This is a globally registered component that is used
      in the App component. In other words, when the render
      function of this component (App.vue) is called, the
      render function of the globally registered component
      (c-global.vue) is available to be called.
    -->
    <c-global></c-global>
    <c-global-inline></c-global-inline>

    <!-- 
      This is a locally registered component and the reason
      why the function of it is available, is because we imported it
      during the setup function. Otherwise this would throw
      an error.
    -->
    <c-local></c-local>
    <c-local-inline></c-local-inline>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

/**
 * Local components are only available inside the scope of the
 * current component (and not its descendants).
 */
import CLocal from './components/c-local.vue'

/**
 * We can also define components inline, which means that we
 * don't have to create a separate file for the component.
 *
 * REMINDER: for this to work we need to include vue runtime
 * compiler in our project (the thing that knows how to generate
 * a component out of a template).
 */
const CLocalInline = defineComponent({
  template: '<div>Local inline component template...</div>'
})
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
</style>
