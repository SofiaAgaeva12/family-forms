<template>
  <div class="page">
    <header-component />
    <div class="page__content">
      <slot></slot>
    </div>
    <footer-component />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from './components/header-component/HeaderComponent.vue'
import FooterComponent from './components/footer-component/FooterComponent.vue'
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
.page__content {
  flex-grow: 1;
  width: var(--width-xs);
}
@media screen and (max-width: 800px) {
  .page__content {
    padding: var(--space-smaller);
    width: var(--width-max);
  }
}
</style>
