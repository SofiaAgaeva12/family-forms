<template>
  <BlockTitle>Персональные данные</BlockTitle>
  <form>
    <transition name="fade" appear>
      <input-container
        title="Имя"
        :error="errors.name"
        :input-value="userData.name"
        @new-value="getUserName"
        @validate="(e: NewValueEvent) => validateData('name', e)"
      />
    </transition>

    <transition name="fade" appear>
      <input-container
        title="Возраст"
        type-input="number"
        :input-value="userData.age"
        :error="errors.age"
        @new-value="getUserAge"
        @validate="(e: NewValueEvent) => validateData('age', e)"
      />
    </transition>
  </form>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import InputContainer from '@/shared/ui/input-component/input-container/InputContainer.vue'
import BlockTitle from '@/shared/ui/block-title/BlockTitle.vue'
import { useUserData, userData, useParentsErrors, type NewValueEvent } from '@/entities'

const { setParentName, setParentAge, getUserData } = useUserData()

const getUserName = (userName: string) => {
  setParentName(userName)
}
const getUserAge = (userAge: number) => {
  setParentAge(userAge)
}

const { validateData, errors } = useParentsErrors()

onMounted(() => {
  getUserData()
})
</script>
