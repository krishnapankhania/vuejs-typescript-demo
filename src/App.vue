<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <img alt="Logo" class="logo" src="@/assets/logo.png" height="125" />
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
