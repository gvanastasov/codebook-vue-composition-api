<template>
  <div class="container">
    <!-- 
      Attributes can be bound to reactive values using the v-bind directive.
      The directive can be shortened to a colon (:) followed by the attribute name.
      The value of the attribute is evaluated as JavaScript and the result is
      assigned to the attribute.
      
      The value is reactive, meaning it will update when the value changes.
      The value can be a variable, a function, or an expression.
    -->
    <div :id="'size_' + size">Size</div>

    <!-- 
      Boolean attributes can be bound to reactive values using the v-bind directive.
    -->
    <button :disabled="size != 6">Dummy button, enabled on size 6 above</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const size = ref(1)

/**
 * Rotate the size value from 1 to 6 and back to 1 every second
 * and use it to change the font size of the text via the id attribute.
 */
setInterval(() => {
  size.value += 1
  size.value %= 7
  size.value = size.value === 0 ? 1 : size.value
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

#size_1 {
  font-size: 1rem;
}

#size_2 {
  font-size: 2rem;
}

#size_3 {
  font-size: 3rem;
}

#size_4 {
  font-size: 4rem;
}

#size_5 {
  font-size: 5rem;
}

#size_6 {
  font-size: 6rem;
}
</style>
