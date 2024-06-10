<template>
  <div class="container">
    <h1>DOM Reference</h1>
    <p ref="theParagraph">Hey...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const lines = ['Yes, you there!', 'I am talking to you!', 'You are awesome!', 'Have a great day!']

/**
 * DOM references are used to access the DOM elements
 * directly from the script. This is useful when we
 * need to manipulate the DOM directly.
 *
 * In this case, we are using the ref function to create
 * a reference to the paragraph element, and then we use
 * the onMounted lifecycle hook to set an interval that
 * changes the text of the paragraph every 2 seconds.
 *
 * The ref function returns a ref object that has a value
 * property that contains the actual DOM element. We can
 * access the DOM element using the value property.
 *
 *  - notice the name of the ref is theParagraph, same as
 *    the ref attribute in the template above!
 */
const theParagraph = ref<HTMLParagraphElement | null>(null)

onMounted(() => {
  let index = 0
  setInterval(() => {
    theParagraph.value!.innerText = lines[index]
    index = (index + 1) % lines.length
  }, 2000)
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
