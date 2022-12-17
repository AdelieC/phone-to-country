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
    <select
      :placeholder="$t(`fields.${name}.placeholder`)"
      @change="handleChangeCountryData"
    >
      <option
        v-for="item in countriesData"
        :value="item.dial_code"
        :key="item.code"
      >
        {{ item.flag }} {{ item.dial_code }}
      </option>
    </select>
    <Hint :input-name="name" />
    <Error v-show="error" :input-name="name" />
  </fieldset>
</template>
