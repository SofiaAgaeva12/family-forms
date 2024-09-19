<template>
  <div class="child-block-header">
    <block-title>Дети (макс. 5)</block-title>
    <light-button @click="addChildForm" :isChildrenFive="isChildrenFive"
      >Добавить ребенка</light-button
    >
  </div>
  <div v-for="(childSavedData, id) in userData.children" :key="id">
    <child-data-form
      :indexChild="id"
      :childSavedData="childSavedData"
      @remove="deleteUnsavedChild(id)"
      @child-data="getOneChildData"
    />
  </div>
  <div v-for="(el, id) in childForms" :key="id">
    <child-data-form
      :indexChild="id"
      @remove="deleteUnsavedChild(id)"
      @child-data="getOneChildData"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BlockTitle from '@/shared/ui/block-title/BlockTitle.vue'
import LightButton from '@/shared/ui/buttons/light-button/LightButton.vue'
import ChildDataForm from '@/features/user-data-form/childs/child-data-form/ChildDataForm.vue'
import { useAddChildren } from '@/features/user-data-form/childs/addChildren.ts'
import { type ChildData, userData } from '@/entities'

const { addChildForm, childForms, removeChildForm, editChildData } = useAddChildren()

const isChildrenFive = computed(() => {
  return childForms.value.length >= 5
})

const getOneChildData = (childData: ChildData) => {
  editChildData(childData)
}
const deleteUnsavedChild = (id: number) => {
  removeChildForm(id)
}
</script>

<style scoped>
@import 'style.css';
</style>
