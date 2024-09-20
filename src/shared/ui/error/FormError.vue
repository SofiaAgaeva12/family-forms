<template>
  <p class="form-error" v-if="message">
    {{ message }}
  </p>
</template>

<script lang="ts" setup>
defineProps<{ message: string | undefined | null }>()
</script>

<style scoped>
.form-error {
  font-size: var(--error-font-size);
  color: var(--error-color);
  padding: var(--space-small) 0;
}
</style>
