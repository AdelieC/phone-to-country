<script setup lang="ts">
import countriesData from "@/utils/content/countries-data.json";
import { ref } from "vue";
const phoneData = ref({ code: "", countryName: "", countryId: "", number: "" });
</script>

<template>
  <div
    class="grow p-8 bg-primary-dark dark:bg-primary-light rounded-xl text-xl shadow-lg flex gap-10 items-center justify-center text-primary-light dark:text-primary-dark flex-wrap"
  >
    <slot name="code" :phoneData="phoneData" :countriesData="countriesData" />
    <slot name="number" :phoneData="phoneData" :countriesData="countriesData" />
  </div>
  <div class="flex flex-col gap-4">
    <p class="text-2xl font-display uppercase">
      {{ $t("results.country-name") }} :
      <span class="text-lg text-secondary-dark dark:text-warning">{{
        phoneData.countryName || $t("results.empty")
      }}</span>
    </p>
    <p class="text-2xl font-display uppercase">
      {{ $t("results.country-id") }} :
      <span class="text-lg text-secondary-dark dark:text-warning">{{
        phoneData.countryId || $t("results.empty")
      }}</span>
    </p>
    <p class="text-2xl font-display uppercase">
      {{ $t("results.code") }} :
      <span class="text-lg text-secondary-dark dark:text-warning">{{
        phoneData.code || $t("results.empty")
      }}</span>
    </p>
    <p class="text-2xl font-display uppercase">
      {{ $t("results.number") }} :
      <span class="text-lg text-secondary-dark dark:text-warning">{{
        phoneData.number || $t("results.empty")
      }}</span>
    </p>
  </div>
</template>
