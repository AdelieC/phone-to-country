<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type { CountryData } from "../types/CountryData";
import type { PhoneData } from "../types/PhoneData";

const props = defineProps({
  phoneData: { type: Object as PropType<PhoneData>, required: true },
  name: { type: String, required: true },
  countriesData: { type: Array<CountryData>, required: true },
});

const handleChangeCountryData = (event: Event) => {
  const el = event.target as HTMLSelectElement;
  const countryData = props.countriesData.find(
    (dataset) => dataset.dial_code === el.value
  );
  console.log(countryData);
  if (countryData) {
    props.phoneData.code = el.value;
    props.phoneData.countryName = countryData.name;
    props.phoneData.countryId = countryData.code;
  } else {
    props.phoneData.code = "";
    props.phoneData.countryName = "";
    props.phoneData.countryId = "";
  }
};
</script>
<template>
  <fieldset>
    <label>{{ $t(`fields.${name}.label`) }}</label>
    <input
      :placeholder="$t(`fields.${name}.placeholder`)"
      @input="handleChangeCountryData"
    />
  </fieldset>
</template>
