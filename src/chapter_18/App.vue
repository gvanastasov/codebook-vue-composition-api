<template>
  <div class="container">
    <h1>Slots</h1>
    <!-- 
      Passing 'state' from parent to child and vice versa
      is not only limited to props and events. You can also
      pass content from parent to child using slots.

      The content from the parent is passed to the child
      component using the <slot> element. The child component
      can then render the content using the <slot> element.

      In essence both components context are shared and api is 
      exposed between them to opperate and share 'state' and 'content'.
    -->
    <c-child>Content from parent...</c-child>
    <c-child><span class="blue">Blue from parent...</span></c-child>

    <!-- 
      If the parent component does not provide any content, the slot
      content is rendered. This is referred to as the fallback content.
    -->
    <c-child></c-child>

    <!-- 
      Named slots are useful when you want to pass multiple slots to a child
      component. The parent component can define the slot content using the
      'v-slot' directive.

      The 'v-slot' directive can be used to define the slot content using
      the 'name' attribute. The child component can then render the slot
      content using the <slot> element with the 'name' attribute.

      Even though the post content is defined before the default slot content,
      the default slot content is rendered first. This is because the component
      exposing the slots is the one that decides the order in which the slots
      are rendered (and where in the DOM).

      We can have as many slots as we like (defined by the child), but only single
      template for a slot can be defined by the parent.

      We can also use a short-hand special syntax for named slots:
        <template #slot-name>...</template>
    -->
    <c-child>
      <template v-slot:postText>
        <span class="blue">Post content from parent...</span>
      </template>
      Default slot from parent...
    </c-child>

    <!--
      We can also ignore rendering default slot content by not providing any content.
      This will trigger the fallback content to be rendered.

      We can also have dynamic slot names.
    -->
    <c-child>
      <template v-slot:[dynamicSlotName]>
        <span class="blue">Dynamic slot name...</span>
      </template>
    </c-child>

    <!-- 
      We can access slot props exposed from the child component using the 'v-slot' directive.
    -->
    <c-child>
      <template #anotherScopedSlot="slotProps">
        <span class="blue"
          >Scoped slot content... {{ slotProps.text }} {{ slotProps.justNumber }}</span
        >
      </template>
    </c-child>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CChild from './components/c-child.vue'

const dynamicSlotName = ref('legend')
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
