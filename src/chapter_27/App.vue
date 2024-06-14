<template>
  <div class="container">
    <h1>Routing</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
      <!-- 
        The RouterLink component is used to navigate between routes.
      -->
      <RouterLink to="/">Go to Home</RouterLink>
      &nbsp;
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <main>
      <!-- 
        The RouterView component is used to render the component associated with the current route.
      -->
      <RouterView />
    </main>
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
