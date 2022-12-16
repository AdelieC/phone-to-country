<script setup lang="ts">
import CountryCodeInput from "@/components/forms/fields/CountryCodeInput.vue";
import FormBase from "@/components/forms/FormBase.vue";
import PhoneNumberInput from "@/components/forms/fields/PhoneNumberInput.vue";
</script>

<template>
  <FormBase>
    <template #code="{ countriesData, phoneData }">
      <CountryCodeInput
        name="country-code-input"
        :countries-data="countriesData"
        :phoneData="phoneData"
      />
    </template>
    <template #number="{ countriesData, phoneData }">
      <PhoneNumberInput
        name="number-input"
        :countries-data="countriesData"
        :phoneData="phoneData"
      />
    </template>
  </FormBase>
</template>
