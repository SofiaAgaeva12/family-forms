<template>
  <form class="child-form">
    <input-container :input-value="''" :title="'Имя'" />
    <input-container :input-value="''" :title="'Возраст'" />
    <transparent-button>Удалить</transparent-button>
  </form>
</template>

<script setup lang="ts">
import InputContainer from '@/shared/ui/input-component/input-container/InputContainer.vue'
import TransparentButton from '@/shared/ui/buttons/transparent-button/TransparentButton.vue'
</script>

<style scoped>
@import './style.css';
</style>
