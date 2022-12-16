<script setup lang="ts">
import CountryCodeSelect from "@/components/forms/fields/CountryCodeSelect.vue";
import FormBase from "@/components/forms/FormBase.vue";
import PhoneNumberInput from "@/components/forms/fields/PhoneNumberInput.vue";
</script>

<template>
  <FormBase>
    <template #code="{ countriesData, phoneData }">
      <CountryCodeSelect
        name="country-code-select"
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
