<template>
  <div class="input-container">
    <label for="name" class="input-label" :class="{ 'input-label-blue': isFocus }">
      {{ title }}</label
    >
    <input-field
      id="name"
      :model-value="inputValue"
      :type="typeInput"
      @focus="changeFocus"
      @blur="changeFocus"
      @update:modelValue="updateInputValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputField from '@/shared/ui/input-component/input-field/InputField.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  inputValue: {
    type: String,
    default: ''
  },
  typeInput: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['newValue'])

const isFocus = ref(false)
const changeFocus = () => {
  isFocus.value = !isFocus.value
}
const updateInputValue = (newValue: string | number) => {
  emit('newValue', newValue)
}
</script>

<style lang="css" scoped>
@import 'style.css';
</style>
