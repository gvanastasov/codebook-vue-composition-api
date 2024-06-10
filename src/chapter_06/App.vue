<template>
  <div class="container">
    <h1>THE FORM</h1>
    <form>
      <!-- 
        Some behaviours require two-way data binding, which is
        passing data from the template to the script and vice versa.
        In this case we use the value from state.name to populate the
        input field, and we use the @input event to update the value
        of state.name when the user types in the input field (back and 
        forth, or two-way data binding)

        The syntax for two-way data binding is:
          - :value="getData..."
          - @input="(event: Event) => setData..."

        This is a common pattern especially when working with forms.
      -->
      <input
        type="text"
        placeholder="Enter your name"
        :value="state.name"
        @input="(event: Event) => (state.name = (event.target as HTMLInputElement)?.value || '')"
      />
      <br />
      <!-- 
        To simplify the work, Vue provides the v-model (special) directive 
        which automatically binds the value of an input field to a data 
        property in the script.
      -->
      <input type="password" placeholder="Enter your password" v-model="state.password" />
      <br />
      <button>Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  name: '',
  password: ''
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

.active {
  background-color: #919191;
}
</style>
