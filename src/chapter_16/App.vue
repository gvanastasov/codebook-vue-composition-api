<template>
  <div class="container">
    <h1>Attribute Inheritance</h1>
    <c-child text="Red"></c-child>

    <!-- 
      Inherited attributed is the one that is not
      explicitly defined in the child component. One 
      such example is the class attribute.
    -->
    <c-child text="Red" class="blue"></c-child>

    <!-- 
      Attributes are also inherited when the child component
      is used within another component. If the root of a template 
      is a another component, the attributes are inherited by 
      the child component. Inhere, CParent does not define a prop
      for the text attribute, and we pass it, it falls through to
      the child component.
    -->
    <c-parent></c-parent>
    <c-parent text="Application"></c-parent>
  </div>
</template>

<script setup lang="ts">
import CChild from './components/c-child.vue'
import CParent from './components/c-parent.vue'
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
  color: white;
  background-color: #00f;
}
</style>
