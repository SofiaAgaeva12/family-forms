<template>
  <BlockTitle>Персональные данные</BlockTitle>
  <data-display>{{ userData.name }}, {{ userData.age }} лет</data-display>
</template>

<script setup>
import BlockTitle from '@/shared/ui/block-title/BlockTitle.vue'
import DataDisplay from '@/shared/ui/data-display/DataDisplay.vue'
import { onMounted } from 'vue'
import { useUserData, userData } from '@/entities'

const { getUserData } = useUserData()
onMounted(() => {
  getUserData()
})
</script>
