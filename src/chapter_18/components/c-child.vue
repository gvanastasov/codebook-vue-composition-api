<template>
  <div class="red">
    <!-- 
      The slot element is used to define the slot content, injected
      by the parent component. (also referred to as slot outlet)
    -->
    <slot>Child fallback content...</slot>

    <!-- 
      The slot element can also be used to define named slots.
      This is useful when you want to pass multiple slots to a child
      component. Default slot has no name.

      We can also conditionally render slot content using the 'v-if'
      directive and checking if the parent has provided content for
      the slot. This can be used to prevent rendering unwanted markup.
    -->
    <slot name="postText" v-if="$slots.postText"></slot>

    <slot name="legend"></slot>

    <!-- 
      Scoped slots are used to pass data from the child component to the
      parent component. The parent component can then use the data to
      render content. The data is passed as props to the slot content.
    -->
    <slot text="scoped text from child..." :justNumber="1" name="anotherScopedSlot"
      >Scoped slot...</slot
    >
  </div>
</template>

<script setup lang="ts">
defineProps({ text: String })
</script>

<style scoped>
.red {
  color: red;
}

.legend {
  font-size: 0.5rem;
  font-weight: normal;
  color: gray;
}
</style>
