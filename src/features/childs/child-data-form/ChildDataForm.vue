<template>
  <form class="child-form" @submit.prevent>
    <input-container :input-value="''" :title="'Имя'" />
    <input-container :input-value="''" :title="'Возраст'" />
    <transparent-button @click="removeDataChild">Удалить</transparent-button>
  </form>
</template>

<script setup lang="ts">
import InputContainer from '@/shared/ui/input-component/input-container/InputContainer.vue'
import TransparentButton from '@/shared/ui/buttons/transparent-button/TransparentButton.vue'

const emit = defineEmits(['remove'])

const removeDataChild = () => {
  emit('remove')
}
</script>

<style scoped>
@import './style.css';
</style>
