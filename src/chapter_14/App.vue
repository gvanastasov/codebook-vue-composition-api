<template>
  <div class="container">
    <h1>Props</h1>
    <!-- 
      Here we are using the locally registered component (CChild)
      and passing some properties from this parent component to an
      instance of it.

      The message property is required, so we must pass a value
      The another-message is multiword, notice the kebab-case
      The optional-message property is optional, so we can pass a value or not
    -->
    <c-child message="Hello from parent!" another-message="Another message from parent!"></c-child>

    <!-- 
      In the above example, both props are static, but we can also pass
      dynamic values to props. This is done via the v-bind directive

      Since we dont (callback) update the parent component, this is considered
      one-way data flow, from parent to child. (reference the bindings chapter) 
    -->
    <c-child :message="'Dynamic: ' + state.count" :another-message="'Just a const'"></c-child>

    <!-- 
      We can also pass boolean values to props. If the prop is present
      in the component, it will be true, otherwise it will be false.
    -->
    <c-child message="This should be colored..." red></c-child>
    <div>
      <span>Parent: {{ state.countModel }}</span>
      &nbsp;
      <c-child
        message="ignored"
        update-model
        v-model:yet-another-message="state.countModel"
        :style="{ display: 'inline' }"
      ></c-child>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import CChild from './components/c-child.vue'

const state = reactive({
  count: 0,
  countModel: 0
})

setInterval(() => {
  state.count += 1
}, 1000)
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
