<template>
  <div>
    <!-- 
      Events can be emit directly from the template via $emit().
    -->
    <button @click="$emit('inlineClick')">Inline</button>

    <!-- 
      EventHandle function can be defined in the script setup 
      block and emitted using the emit function.
    -->
    <button @click="handleClick">Handle</button>

    <!-- 
      You can also pass arguments to the emit function.
    -->
    <button @click="$emit('argumentClick', 42)">Emit</button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

/**
 * Events have to be defined using the defineEmits function.
 */
const emit = defineEmits(['inlineClick', 'click', 'argumentClick'])

const handleClick = () => {
  emit('click')
}
</script>
