<template>
  <div class="button-save">
    <blue-button @click="saveData">Сохранить</blue-button>
  </div>
</template>

<script setup lang="ts">
import BlueButton from '@/shared/ui/buttons/blue-button/BlueButton.vue'

const saveData = (userChildData: UserChildData) => {}
</script>

<style scoped>
@import './style.css';
</style>
