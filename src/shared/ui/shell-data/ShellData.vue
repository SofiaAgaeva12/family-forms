<template>
  <div class="shell">
    <data-display>
      <slot></slot>
    </data-display>
  </div>
</template>

<script setup>
import DataDisplay from '@/shared/ui/data-display/DataDisplay.vue'
</script>

<style scoped>
@import './style.css';
</style>
