<template>
  <parent-data-form />
  <child-data-forms />
  <save-data-button />
</template>

<script setup lang="ts">
import ParentDataForm from '@/features/user-data-form/parent/ParentDataForm.vue'
import ChildDataForms from '@/features/user-data-form/childs/child-data-forms/ChildDataForms.vue'
import SaveDataButton from '@/features/user-data-form/save-data/SaveDataButton.vue'
</script>

<style scoped></style>
