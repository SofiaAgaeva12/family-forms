<template>
  <div class="shells">
    <shell-data v-for="itemData in data" :key="itemData.id">
      {{ itemData.name }}, {{ itemData.age }} лет
    </shell-data>
  </div>
</template>

<script setup lang="ts">
import ShellData from '@/shared/ui/shell-data/ShellData.vue'
import type { ChildData } from '@/entities/index.js'

const props = defineProps<{
  data: ChildData[]
}>()
</script>

<style scoped>
@import './style.css';
</style>
