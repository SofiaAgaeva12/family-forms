<template>
  <div class="input-container">
    <label for="name" class="input-label">{{ title }}</label>
    <input-field id="name" :model-value="inputValue" />
  </div>
</template>

<script setup lang="ts">
import InputField from "@/shared/ui/input-component/input-field/InputField.vue";

defineProps({
  title: {
    type: String,
    default: ''
  },
  inputValue: {
    type: String,
    default: ''
  },
});

</script>

<style lang="css" scoped>
@import 'style.css';
</style>