<template>
  <input
      :autocomplete="autocompleteType"
      :class="[DisabledInput, typeOfInput]"
      :disabled="disabled"
      :type="type"
      :value="modelValue"
      class="form-input"
      @blur="updateBlur"
      @input="updateValue"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: ''
  },

  modelValue: {
    type: [String, Number],
    default: ''
  },
  autocompleteType: {
    type: String,
    default: 'off'
  },
  disabled: {
    type: Boolean,
    default: false
  }

});

const DisabledInput = computed(() => {
return props.disabled ? 'form-input--disabled' : '';
});

const typeOfInput = computed(() => {
return `form-input--${props.type}`;
});

const emit = defineEmits(['update:modelValue', 'blur']);

const updateValue = (event) => {
const inputElement = event.target;
emit('update:modelValue', inputElement.value);
};

const updateBlur = () => {
emit('blur');
};
</script>

<style lang="css" scoped>
@import './style.css';
</style>