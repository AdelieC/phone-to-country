<script setup lang="ts">
const sectionNames = [
  "select-section",
  "double-input-section",
  "single-input-section",
  "bonus",
];
const githubHref = import.meta.env.VITE_GITHUB_REPO;
</script>

<template>
  <h1 class="text-5xl font-display uppercase">{{ $t("about.title") }}</h1>
  <p>{{ $t("about.intro") }}</p>
  <section v-for="name in sectionNames">
    <h2 class="text-3xl font-display uppercase">
      {{ $t(`about.${name}.heading`) }}
    </h2>
    <p>{{ $t(`about.${name}.text`) }}</p>
  </section>
  <a :href="githubHref">{{ $t(`about.github-link`) }}</a>
</template>
