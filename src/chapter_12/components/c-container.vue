<!-- 
  This component is used to render a container that centers its content
  vertically and horizontally. It is a simple container that can be used
  to wrap other components and center them on the screen.

  (can potentially be expanded to support other behaviours like padding,
  margin, etc.)
-->
<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

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
