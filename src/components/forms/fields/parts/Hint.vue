<script setup lang="ts">
const props = defineProps({
  inputName: { type: String, required: true },
});
</script>
<template>
  <p class="text-xs font-sans text-primary-light dark:text-info">
    {{ $t(`fields.${inputName}.hint`) }}
  </p>
</template>
