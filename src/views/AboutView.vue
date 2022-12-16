<script setup lang="ts">
const sectionNames = [
  "select-section",
  "double-input-section",
  "single-input-section",
];
</script>

<template>
  <h1>{{ $t("about.title") }}</h1>
  <p>{{ $t("about.intro") }}</p>
  <section v-for="name in sectionNames">
    <h2>{{ $t(`about.${name}.heading`) }}</h2>
    <p>{{ $t(`about.${name}.text`) }}</p>
  </section>
</template>
