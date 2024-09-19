<template>
  <div class="block-child-data">
    <block-title>Дети</block-title>
    <shells-data :data="userData.children" />
  </div>
</template>

<script setup>
import BlockTitle from '@/shared/ui/block-title/BlockTitle.vue'
import ShellsData from '@/shared/ui/shell-data/ShellsData.vue'

import { useUserData, userData } from '@/entities'
import { onMounted } from 'vue'

const { getUserData } = useUserData()
onMounted(() => {
  getUserData()
})
</script>

<style scoped>
.block-child-data {
  margin-top: var(--space-big);
}
</style>
