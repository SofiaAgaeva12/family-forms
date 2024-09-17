<template>
  <div class="page">
    <header-component />
    <div class="page__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

import HeaderComponent from './components/HeaderComponent/index.vue';

</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>