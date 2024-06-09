<template>
  <p>The count is {{ count }}</p>

  <button @click="count++" class="bg-blue-600">Increment</button>
</template>

<script setup lang="ts">
const count = ref(0);
</script>
