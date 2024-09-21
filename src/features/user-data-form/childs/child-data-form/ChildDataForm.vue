<template>
  <form class="child-form" @submit.prevent>
    <div class="child-form__fields">
      <input-container
        title="Имя"
        :input-value="childSavedData.name"
        :error="errors.name"
        @new-value="getChildName"
        @validate="(e: NewValueEvent) => validateData('name', e)"
      />
      <input-container
        title="Возраст"
        type-input="number"
        :input-value="childSavedData.age"
        :error="errors.age"
        @new-value="getChildAge"
        @validate="(e: NewValueEvent) => validateData('age', e)"
      />
    </div>
    <transparent-button @click="removeDataChild">Удалить</transparent-button>
  </form>
</template>

<script setup lang="ts">
import InputContainer from '@/shared/ui/input-component/input-container/InputContainer.vue'
import TransparentButton from '@/shared/ui/buttons/transparent-button/TransparentButton.vue'
import { reactive } from 'vue'
import { type ChildData, type NewValueEvent, useChildrenErrors } from '@/entities'

const emit = defineEmits(['remove', 'childName', 'childAge'])
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
  emit('childName', childData)
}
const getChildAge = (userAge: number) => {
  childData.id = props.indexChild
  childData.age = userAge
  emit('childAge', childData)
}
</script>

<style scoped>
@import 'style.css';
</style>
