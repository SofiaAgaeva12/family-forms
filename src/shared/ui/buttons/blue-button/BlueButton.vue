<template>
  <button
    class="blue-button"
    :disabled="isDisabled"
    :class="{ 'blue-button--disabled': isDisabled }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isDisabled?: boolean
}>()
</script>

<style scoped>
.blue-button {
  background-color: var(--blue-color);
  padding: var(--space-small) var(--space-medium);
  color: white;
  font-size: var(--base-font-size);
  border-radius: var(--border-radius-max);
  border: none;
  cursor: pointer;
}
.blue-button--disabled {
  background-color: var(--gray-color);
}
</style>
