<template>
  <input
    class="form-input"
    :class="{ 'form-input--error': error }"
    :disabled="disabled"
    :type="type"
    :value="modelValue"
    @focus="updateFocus"
    @blur="updateBlur"
    @input="updateValue"
  />
</template>
<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  error: {
    type: Boolean,
    default: false
  },

  modelValue: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const updateValue = (event: Event) => {
  const inputElement = event.target as HTMLInputElement
  if (inputElement) {
    emit('update:modelValue', inputElement.value)
  }
}

const updateBlur = () => {
  emit('blur')
}
const updateFocus = () => {
  emit('focus')
}
</script>

<style lang="css" scoped>
@import './style.css';
</style>
