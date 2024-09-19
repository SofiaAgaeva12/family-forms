<template>
  <div class="button-save">
    <blue-button @click="saveData">Сохранить</blue-button>
  </div>
</template>

<script setup lang="ts">
import BlueButton from '@/shared/ui/buttons/blue-button/BlueButton.vue'
import { useUserData } from '@/entities'
import { useAddChildren } from '@/features'

const { saveUserData } = useUserData()
const { saveChildren } = useAddChildren()

const saveData = () => {
  saveChildren()
  saveUserData()
}
</script>

<style scoped>
@import 'style.css';
</style>
