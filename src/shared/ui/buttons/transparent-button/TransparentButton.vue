<template>
  <button class="transparent-button" type="button">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
.transparent-button {
  border: none;
  color: var(--blue-color);
  background-color: white;
  cursor: pointer;
  font-size: var(--base-font-size);
  height: 56px;
}
</style>
