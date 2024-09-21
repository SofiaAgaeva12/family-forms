<template>
  <div class="child-block-header">
    <block-title>Дети (макс. 5)</block-title>
    <light-button @click="addChildForm" v-if="!isChildrenFive">Добавить ребенка </light-button>
  </div>
  <transition-group name="fade-up" tag="div">
    <div v-for="(childData, id) in unsavedChildren" :key="id" class="fade-item">
      <child-data-form
        :indexChild="id"
        :childSavedData="childData"
        @remove="deleteUnsavedChild(id)"
        @child-name="getChildName"
        @child-age="getChildAge"
      />
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import BlockTitle from '@/shared/ui/block-title/BlockTitle.vue'
import LightButton from '@/shared/ui/buttons/light-button/LightButton.vue'
import ChildDataForm from '@/features/user-data-form/childs/child-data-form/ChildDataForm.vue'
import { useAddChildren } from '@/features'
import { type ChildData } from '@/entities'

const {
  addChildForm,
  unsavedChildren,
  removeChildForm,
  editChildAge,
  editChildName,
  getSavedChildren
} = useAddChildren()

const isChildrenFive = computed(() => {
  return unsavedChildren.value.length >= 5
})

const getChildName = (childData: ChildData) => {
  editChildName(childData)
}
const getChildAge = (childData: ChildData) => {
  editChildAge(childData)
}
const deleteUnsavedChild = (id: number) => {
  removeChildForm(id)
}

onMounted(() => {
  getSavedChildren()
})
</script>

<style scoped>
@import 'style.css';
</style>
