<script setup lang="ts">
import PrefixedPhoneNumberInput from "@/components/forms/fields/PrefixedPhoneNumberInput.vue";
import FormBase from "@/components/forms/FormBase.vue";
</script>

<template>
  <FormBase>
    <template #number="{ countriesData, phoneData }">
      <PrefixedPhoneNumberInput
        name="prefixed-number-input"
        :countries-data="countriesData"
        :phoneData="phoneData"
      />
    </template>
  </FormBase>
</template>
