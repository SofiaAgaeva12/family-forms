<template>
  <BlockTitle>Персональные данные</BlockTitle>
  <form>
    <input-container :input-value="''" :title="'Имя'" />
    <input-container :input-value="''" :title="'Возраст'" />
  </form>
</template>

<script setup lang="ts">
import InputContainer from '@/shared/ui/input-component/input-container/InputContainer.vue'
import BlockTitle from '@/shared/ui/block-title/BlockTitle.vue'
</script>
