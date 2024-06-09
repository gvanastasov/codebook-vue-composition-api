<template>
  <div class="container">
    <!-- 
      Directives are special attributes with the v- prefix that are used to
      manipulate the DOM. They are reactive and can be used to bind data to
      the DOM, conditionally render elements, and more.

      Directives can be used in the form of:

        v-name:argument.modifier="value"

      The argument is optional and can be used to pass additional information to
      the directive. The modifier is also optional and can be used to change the
      behavior of the directive.

      There are a number of built-in directives, and custom directives can be created.
    -->

    <!-- 
      The v-html directive is used to render HTML content inside the DOM.
    -->
    <div v-html="'<h1>Heading</h1>'"></div>

    <!-- 
      The v-text directive is used to render text content inside the DOM.
    -->
    <div v-text="'Text'"></div>

    <!-- 
      The v-show directive is used to conditionally render elements based on a
      reactive value. The element is hidden when the value is false.
    -->
    <div v-show="true">Show</div>

    <!-- 
      The v-if directive is used to conditionally render elements based on a
      reactive value. The element is removed from the DOM when the value is false.
    -->
    <div v-if="true">if</div>

    <!-- 
      The v-else-if directive is used to conditionally render elements based on a
      reactive value. The element is removed from the DOM when the value is false.
    -->
    <div v-if="false">if</div>
    <div v-else-if="true">else-if</div>
    <div v-else>else</div>

    <!--
      the v-else directive is used to conditionally render elements based on a
      reactive value. The element is removed from the DOM when the value is false.
    -->
    <div v-if="false">if</div>
    <div v-else>else</div>

    <!-- 
      The v-for directive is used to render a list of elements based on an array.
    -->
    <div>
      <span v-for="i in 3" :key="i">{{ i }}</span>
    </div>

    <!-- 
      The v-bind directive is used to bind an attribute to a reactive value.
    -->
    <div v-bind:id="'size_' + 1">Size</div>

    <!-- 
      The v-on directive is used to bind an event listener to an element.
    -->
    <button v-on:click="() => console.log('clicked')">Click me</button>

    <!--
      Modifiers can be used to change the behavior of directives.
      The .prevent modifier is used to prevent the default behavior of an event.
      There is a number of build-in modifiers, and custom modifiers can be created.
    -->
    <button v-on:click.prevent="() => console.log('clicked')">Click me</button>
  </div>
</template>

<script setup lang="ts"></script>

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
