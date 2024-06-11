<template>
  <div :class="{ red }">Child: {{ updateModel ? yetAnotherMessage : message }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

/**
 * We can define props for our component using the defineProps
 * function. This function takes an object as an argument and
 * returns an object with the same properties, but with the
 * type of the property inferred from the value of the property.
 *
 * All of these properties are reactive, so if the parent component
 * changes the value of the prop, the child component will re-render
 * with the new value. This is also known as one-way binding.
 */
const props = defineProps({
  message: {
    type: String,
    required: true
  },
  anotherMessage: {
    type: String,
    required: false
  },
  optionalMessage: {
    type: String,
    default: 'This is the default value'
  },
  red: {
    type: Boolean,
    default: false
  },
  validated: {
    type: Number,
    validator: (value: Number) => {
      return value === 1
    }
  },
  updateModel: {
    type: Boolean,
    default: false
  }
})

/**
 * We can also define a model for our component using the defineModel
 * function. This will allow to use the v-model directive on our component
 * and bind the value of the model to a prop. This is also known as two-way
 * binding. Changes to the model in the child component will be reflected
 * in the parent component and vice versa.
 *
 * We can have multiple (named) models in a component, but only one default
 * model. The default model is the one that is bound to the v-model directive
 * without a name.
 *
 */
const yetAnotherMessage = defineModel('yetAnotherMessage', {
  type: Number,
  default: 0
})

setInterval(() => {
  if (props.updateModel) {
    yetAnotherMessage.value++
  }
}, 1000)

console.log('Child: ', props.message)
</script>

<style scoped>
.red {
  color: red;
}
</style>
