<template>
  <div class="button-save">
    <blue-button @click="saveData">Сохранить</blue-button>
  </div>
</template>

<script setup lang="ts">
import BlueButton from '@/shared/ui/buttons/blue-button/BlueButton.vue'
import { UserChildData } from '@/shared/types'
const saveData = (userChildData: UserChildData) => {
  localStorage.setItem('userData', JSON.stringify(userChildData))
}
</script>

<style scoped>
@import './style.css';
</style>
