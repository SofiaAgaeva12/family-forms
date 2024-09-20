<template>
  <div class="button-save">
    <blue-button @click="saveData" :isDisabled="isDisableButton">Сохранить</blue-button>
  </div>
</template>

<script setup lang="ts">
import BlueButton from '@/shared/ui/buttons/blue-button/BlueButton.vue'
import { useUserData, isParentDataValid } from '@/entities'
import { useAddChildren } from '@/features'
import { computed } from 'vue'

const { saveUserData } = useUserData()
const { saveChildren } = useAddChildren()

const saveData = () => {
  saveChildren()
  saveUserData()
}

const isDisableButton = computed(() => {
  return !isParentDataValid.value
})
</script>

<style scoped>
@import 'style.css';
</style>
