<template>
  <div class="input-container">
    <label
      for="name"
      class="input-label"
      :class="{ 'input-label--blue': isFocus, 'input-label--red': !!error }"
    >
      {{ title }}</label
    >
    <input-field
      v-model="model"
      :error="!!error"
      :model-value="inputValue"
      :type="typeInput"
      @focus="changeFocus"
      @blur="blurFunction"
      @update:modelValue="updateInputValue"
    />
    <FormError :message="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputField from '@/shared/ui/input-component/input-field/InputField.vue'
import FormError from '@/shared/ui/error/FormError.vue'

const props = defineProps<{
  title: string
  typeInput?: string
  inputValue: string | number
  error?: string | null
}>()

const emit = defineEmits(['newValue', 'validate'])

const model = ref()

const isFocus = ref(false)

const changeFocus = () => {
  isFocus.value = !isFocus.value
}

const blurFunction = () => {
  changeFocus()
  emit('validate', model.value)
}

const updateInputValue = (newValue: string | number) => {
  emit('newValue', newValue)
}
</script>

<style lang="css" scoped>
@import 'style.css';
</style>
