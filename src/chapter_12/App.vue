<template>
  <c-page title="Components">
    <p>
      Components in vue are reusable pieces of code that can be used to build complex user
      interfaces. Components can be used to create custom elements that can be reused across the
      application.
    </p>
    <p>
      This application consists of a few reusable components that are used to build the user
      interface. The components are:
    </p>
    <ul>
      <li>c-container</li>
      <li>c-heading</li>
      <li>c-page</li>
    </ul>
    <p>
      Each component has its own purpose and encapsulates a specific part of the application UI
      logic and presentation. Look back into the previous chapters. Technically nothing has changed,
      but the code is now more organized and easier to maintain, especially when the application
      grows (aka scales). Even further, the components can be reused in other applications (or even
      build shared libraries).
    </p>
    <p>
      For now ignore the code details, but just try to understand the concept of components and how
      they can be used to build complex user interfaces.
    </p>
  </c-page>
</template>

<script setup lang="ts">
import CPage from './components/c-page.vue'
</script>
