<script setup lang="ts">
import countriesData from "@/utils/content/countries-data.json";
import { ref } from "vue";
const phoneData = ref({ code: "", countryName: "", countryId: "", number: "" });
</script>

<template>
  <div class="grow flex max-w-4xl items-center justify-around">
    <slot name="code" :phoneData="phoneData" :countriesData="countriesData" />
    <slot name="number" :phoneData="phoneData" :countriesData="countriesData" />
  </div>
  <div class="flex flex-col gap-4">
    <p class="text-2xl font-display uppercase">
      Votre pays : {{ phoneData.countryName }}
    </p>
    <p class="text-2xl font-display uppercase">
      Identifiant du pays : {{ phoneData.countryId }}
    </p>
    <p class="text-2xl font-display uppercase">
      Code du pays : {{ phoneData.code }}
    </p>
    <p class="text-2xl font-display uppercase">
      Votre numéro : {{ phoneData.number }}
    </p>
  </div>
</template>
