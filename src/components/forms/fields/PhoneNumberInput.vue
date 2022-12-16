<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import PhoneNumberProcessor from "@/utils/services/PhoneNumberProcessor";

type CountryData = {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
};

type PhoneData = {
  countryName: string;
  countryId: string;
  code: string;
  number: string;
};

const props = defineProps({
  phoneData: { type: Object as PropType<PhoneData>, required: true },
  name: { type: String, required: true },
  countriesData: { type: Array<CountryData>, required: true },
});

const handleChangeNumber = (event: Event) => {
  const el = event.target as HTMLInputElement;
  //todo : parse number
  props.phoneData.number = PhoneNumberProcessor.removeCodeFromNumber(
    el.value,
    props.phoneData.code
  );
};
</script>

<template>
  <label>{{ $t(`fields.${name}.label`) }}</label>
  <input
    name="phone"
    type="tel"
    @input="handleChangeNumber"
    required
    :placeholder="$t(`fields.${name}.placeholder`)"
  />
</template>
