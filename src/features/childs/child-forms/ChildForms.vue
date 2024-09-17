<template>
  <div class="child-block-header">
    <block-title>Дети (макс. 5)</block-title>
    <light-button>Добавить ребенка</light-button>
  </div>

  <child-data-form />
</template>

<script setup>
import BlockTitle from "@/shared/ui/block-title/BlockTitle.vue";
import LightButton from "@/shared/ui/buttons/light-button/LightButton.vue";
import ChildDataForm from "@/features/childs/child-data-form/ChildDataForm.vue";
</script>

<style scoped>
@import 'style.css';
</style>