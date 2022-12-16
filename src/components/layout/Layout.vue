<script setup lang="ts">
import Header from "./parts/Header.vue";
import Footer from "./parts/Footer.vue";
</script>

<template>
  <Header />
  <main class="grow">
    <slot />
  </main>
  <Footer />
</template>
