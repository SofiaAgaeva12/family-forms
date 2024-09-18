<template>
  <div class="child-block-header">
    <block-title>Дети (макс. 5)</block-title>
    <light-button @click="addChild" :isChildrenFive="isChildrenFive">Добавить ребенка</light-button>
  </div>

  <div v-for="(el, id) in childrenId" :key="id">
    <child-data-form :id="id" @remove="removeChild(id)" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BlockTitle from '@/shared/ui/block-title/BlockTitle.vue'
import LightButton from '@/shared/ui/buttons/light-button/LightButton.vue'
import ChildDataForm from '@/features/childs/child-data-form/ChildDataForm.vue'
import { useAddChildren } from '@/features/childs/addChildren.ts'

const { addChild, childrenId, removeChild } = useAddChildren()

const isChildrenFive = computed(() => {
  return childrenId.value.length >= 5
})
</script>

<style scoped>
@import 'style.css';
</style>
