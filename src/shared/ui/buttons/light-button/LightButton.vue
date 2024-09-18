<template>
  <button
    class="light-button"
    :disabled="isChildrenFive"
    :class="{ 'light-button--disabled': isChildrenFive }"
  >
    <img class="light-button__plus" src="@/shared/ui/icons/plus.svg" alt="" /> <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  isChildrenFive: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
@import './style.css';
</style>
