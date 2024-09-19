<template>
  <form class="child-form" @submit.prevent>
    <input-container :input-value="childSavedData.name" :title="'Имя'" @new-value="getChildName" />
    <input-container
      :input-value="childSavedData.age"
      :title="'Возраст'"
      :type-input="'number'"
      @new-value="getChildAge"
    />
    <transparent-button @click="removeDataChild">Удалить</transparent-button>
  </form>
</template>

<script setup lang="ts">
import InputContainer from '@/shared/ui/input-component/input-container/InputContainer.vue'
import TransparentButton from '@/shared/ui/buttons/transparent-button/TransparentButton.vue'
import { reactive } from 'vue'
import type { ChildData } from '@/entities'

const emit = defineEmits(['remove', 'childData'])
const props = defineProps<{
  indexChild: number
  childSavedData: ChildData
}>()
const removeDataChild = () => {
  emit('remove')
}

const childData = reactive({
  id: 0,
  name: '',
  age: 0
})

const getChildName = (userName: string) => {
  childData.id = props.indexChild
  childData.name = userName
  emit('childData', childData)
}
const getChildAge = (userAge: number) => {
  childData.age = userAge
  emit('childData', childData)
}
</script>

<style scoped>
@import 'style.css';
</style>
