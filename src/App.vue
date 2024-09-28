<script setup lang="ts">
import { legacyLogicalPropertiesTransformer } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const locale = zhCN
</script>

<template>
  <a-config-provider :locale="locale">
    <a-style-provider hash-priority="high" :transformers="[legacyLogicalPropertiesTransformer]">
      <RouterView></RouterView>
    </a-style-provider>
  </a-config-provider>
</template>

<style>
html,
body,
#app {
  @apply w-full h-full;
}
</style>
