<script setup lang="ts">
const props = defineProps({
  inputName: { type: String, required: true },
  errorKey: { type: String, required: false },
});
</script>
<template>
  <p class="text-accent text-xs font-sans">
    {{
      errorKey
        ? $t(`fields.${inputName}.${errorKey}`)
        : $t(`fields.${inputName}.error`)
    }}
  </p>
</template>
