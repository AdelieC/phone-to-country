<script setup lang="ts">
import Header from "./parts/Header.vue";
import Footer from "./parts/Footer.vue";
</script>

<template>
  <Header />
  <main
    class="grow flex flex-col px-20 lg:px-24 xl:px-40 2xl:px-60 py-10 lg:py-28 2xl:py-36"
  >
    <slot />
  </main>
  <Footer />
</template>
