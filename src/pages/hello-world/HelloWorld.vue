<script setup lang="ts">
const count = ref(1)
</script>

<template>
  <section class="w-full h-full flex items-center justify-center text-2xl font-bold">
    <div>
      <h1>Hello World</h1>
      <div>count: {{ count }}</div>
      <AButton type="primary" @click="count++">Increment</AButton>
    </div>
  </section>
</template>
