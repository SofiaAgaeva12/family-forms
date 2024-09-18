<template>
  <header class="header">
    <router-link to="/">
        <img src="@/app/assets/logo.svg" alt="logo" class="header__logo">
    </router-link>
    <nav class="header__nav">
      <router-link to="/">
        <p class="header__nav-link">
          Форма
        </p>
      </router-link>
      <router-link to="/preview">
        <p class="header__nav-link">
          Превью
        </p>
      </router-link>
    </nav>
  </header>
  <div class="border-header"></div>
</template>

<script setup>
</script>

<style lang="css" scoped>
@import 'style.css';
</style>
