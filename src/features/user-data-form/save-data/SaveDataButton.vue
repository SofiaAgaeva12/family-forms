<template>
  <div class="button-save">
    <blue-button @click="saveData" :isDisabled="isDisableButton">Сохранить</blue-button>
    <transition name="fade">
      <p class="button-save__message" v-if="isSaveData">Данные сохранены</p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import BlueButton from '@/shared/ui/buttons/blue-button/BlueButton.vue'
import {
  useUserData,
  isParentDataValid,
  isChildDataValid,
  validateChildrenData,
  validateParentData
} from '@/entities'
import { useAddChildren } from '@/features'
import { computed, ref, watch } from 'vue'

const { saveUserData } = useUserData()
const { saveChildren, unsavedChildren } = useAddChildren()

const isSaveData = ref(false)

const saveData = () => {
  saveChildren()
  saveUserData()
  isSaveData.value = true

  setTimeout(() => {
    isSaveData.value = false
  }, 1000)
}

const isDisableButton = computed(() => {
  return !isParentDataValid.value || !isChildDataValid.value
})

watch(
  () => unsavedChildren.value.length,
  () => {
    validateChildrenData()
    validateParentData()
  }
)
</script>

<style scoped>
.button-save {
  display: flex;
  gap: var(--space-medium-plus);
  align-items: center;
  padding-top: var(--space-medium);
  .button-save__message {
    color: var(--blue-color);
  }
}
</style>
