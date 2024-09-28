<script setup lang="ts">
const count = ref(1)
</script>

<template>
  <section class="w-full h-full flex items-center justify-center text-2xl font-bold">
    <section>
      <h1>Hello World</h1>
      <div>count: {{ count }}</div>
      <div>
        <ElButton type="primary" @click="count++">Increment</ElButton>
      </div>
    </section>
  </section>
</template>
