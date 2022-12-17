<script setup lang="ts">
const props = defineProps({
  path: { type: String, required: true },
  label: { type: String, required: true },
  description: { type: String, required: true },
});
</script>
<template>
  <button
    class="p-8 bg-primary-dark dark:bg-primary-light rounded-xl text-2xl shadow-lg flex gap-4 lg:gap-10 flex-col items-center justify-center max-w-md"
    @click="$router.push(path)"
  >
    <span
      class="text-2xl lg:text-3xl text-warning dark:text-accent font-display uppercase"
      >{{ label }}</span
    >
    <span
      class="text-lg lg:text-xl text-primary-light dark:text-secondary-dark"
      >{{ description }}</span
    >
  </button>
</template>
