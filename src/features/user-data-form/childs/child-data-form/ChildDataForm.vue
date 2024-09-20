<template>
  <form class="child-form" @submit.prevent>
    <div class="child-form__fields">
      <input-container
        :input-value="childSavedData.name"
        :title="'Имя'"
        :error="errors.name"
        @new-value="getChildName"
        @validate="(e) => validateData('name', e)"
      />
      <input-container
        :input-value="childSavedData.age"
        :title="'Возраст'"
        :type-input="'number'"
        :error="errors.age"
        @new-value="getChildAge"
        @validate="(e) => validateData('name', e)"
      />
    </div>
    <transparent-button @click="removeDataChild">Удалить</transparent-button>
  </form>
</template>

<script setup lang="ts">
import InputContainer from '@/shared/ui/input-component/input-container/InputContainer.vue'
import TransparentButton from '@/shared/ui/buttons/transparent-button/TransparentButton.vue'
import { reactive } from 'vue'
import { type ChildData, useChildrenErrors } from '@/entities'

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

const { validateData, errors } = useChildrenErrors()

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
