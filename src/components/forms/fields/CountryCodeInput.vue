<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type { CountryData } from "../types/CountryData";
import type { PhoneData } from "../types/PhoneData";
import Hint from "./parts/Hint.vue";
import Error from "./parts/Error.vue";

const error = ref(false);

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
  if (countryData) {
    error.value = false;
    props.phoneData.code = el.value;
    props.phoneData.countryName = countryData.name;
    props.phoneData.countryId = countryData.code;
  } else {
    error.value = true;
    props.phoneData.code = "";
    props.phoneData.countryName = "";
    props.phoneData.countryId = "";
  }
};
</script>

<template>
  <fieldset>
    <label>{{ $t(`fields.${name}.label`) }} </label>
    <input
      :placeholder="$t(`fields.${name}.placeholder`)"
      @input="handleChangeCountryData"
    />
    <Hint :input-name="name" />
    <Error v-show="error" :input-name="name" />
  </fieldset>
</template>
