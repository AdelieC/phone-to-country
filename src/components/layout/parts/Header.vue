<script setup lang="ts">
import LanguageSelect from "./LanguageSelect.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="w-screen flex gap-8 items-center justify-between p-8 font-display"
  >
    <div class="flex gap-4 items-center justify-between">
      <img class="h-16" alt="App logo" src="../../../assets/logo.svg" />
      <p class="text-5xl font-bold">
        <span class="">{{ $t("app.name.neutral") }}</span
        ><span class="text-warning">{{ $t("app.name.accent") }}</span>
      </p>
    </div>
    <nav class="flex gap-8 font-bold text-2xl uppercase">
      <RouterLink to="/" exact-active-class="text-warning">{{
        $t("nav.home")
      }}</RouterLink>
      <RouterLink to="/about" exact-active-class="text-warning">{{
        $t("nav.about")
      }}</RouterLink>
    </nav>
    <LanguageSelect />
  </header>
</template>
