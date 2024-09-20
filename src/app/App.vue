<template>
  <default-layout>
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <div :key="currentRoute.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </default-layout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/app/layouts/default-layout/DefaultLayout.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const currentRoute = useRoute()

const transitionName = computed(() => {
  if (currentRoute.meta.isForward === null) {
    return ''
  }
  return currentRoute.meta.isForward ? 'slide-left' : 'slide-right'
})
</script>
