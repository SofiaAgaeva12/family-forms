<template>
  <BlockTitle>Персональные данные</BlockTitle>
  <form>
    <input-container :input-value="userData.name" :title="'Имя'" @new-value="getUserName" />
    <input-container
      :input-value="userData.age"
      :title="'Возраст'"
      :type-input="'number'"
      @new-value="getUserAge"
    />
  </form>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import InputContainer from '@/shared/ui/input-component/input-container/InputContainer.vue'
import BlockTitle from '@/shared/ui/block-title/BlockTitle.vue'
import { useUserData, userData } from '@/entities'

const { setParentData, getUserData } = useUserData()

const parentData = reactive({
  name: '',
  age: 0
})

const getUserName = (userName: string) => {
  parentData.name = userName
  setParentData(parentData)
}
const getUserAge = (userAge: number) => {
  parentData.age = userAge
  setParentData(parentData)
}
onMounted(() => {
  getUserData()
})
</script>
