<template>
  <div>
    <!-- 
      We use Teleport to move the form to the modal-wrapper. This way, the form is not a child of
      the modal-wrapper, but it's rendered inside it. This is useful when you want to render a
      component in a different part of the DOM without changing its parent-child relationship,
      as well as retain access to the component's state this markup originated from.

      We also might want to hide some of the implementation details, like target for the teleport
      and etc. to a seprate component, so we can reuse it in multiple places.
    -->
    <Teleport to="#modal-wrapper > div" v-if="showForm">
      <div>
        <form>
          <label for="name">Name:</label>
          <input id="name" type="text" v-model="name" />
          <br />
          <label for="email">Email:</label>
          <input id="email" type="email" v-model="email" />
          <br />
          <button type="submit">Submit</button>
        </form>
        <button @click="toggleForm">Close</button>
      </div>
    </Teleport>
    <button @click="toggleForm">{{ showForm ? 'Hide' : 'Show' }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showForm = ref(false)
const name = ref('')
const email = ref('')

const toggleForm = () => {
  showForm.value = !showForm.value
}
</script>
