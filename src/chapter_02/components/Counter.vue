<template>
    <div>Counter</div>
</template>

<script setup lang="ts">
    /**
     * The main purposes of components is reusability, modularity, and
     * encapsulation. They are the building blocks of Vue applications.
     * 
     * Part of components is the data they hold, or in other words the state
     * of the component. This state can be reactive, meaning it will trigger
     * a re-render of the component when it changes.
     * 
     * In Vue 3, you can use the `reactive` function to create a reactive object.
     * 
     *  - reactive can be used for objects and arrays.
     */
    import { reactive } from 'vue';

    const state = reactive({
        value: 0
    });

    console.log("Counter value: ", state.value);

    /**
     * Changes to the state object will trigger a re-render of the component.
     */
    setInterval(() => {
        state.value++;
    }, 1000);


    /**
     * Another way to create reactive state is by using the `ref` function.
     * This function creates a reactive object that holds a single value.
     * 
     *  - ref can be used for primitive values, objects, and arrays.
     */
    import { ref } from 'vue';

    const title = ref('Count');

    /**
     * Changes to the ref object will trigger a re-render of the component.
     */
    title.value += 'er';

    console.log("Counter title: ", title.value);
</script>