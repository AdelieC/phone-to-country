<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import fetchApiPhoneData from "@/utils/api/fetchApiPhoneData";
import PhoneNumberProcessor from "@/utils/services/PhoneNumberProcessor";
import type { CountryData } from "../types/CountryData";
import type { PhoneData } from "../types/PhoneData";

const apiError = ref("");

const props = defineProps({
  phoneData: { type: Object as PropType<PhoneData>, required: true },
  name: { type: String, required: true },
  countriesData: { type: Array<CountryData>, required: true },
});

const handleChangePhoneData = async (event: Event) => {
  const el = event.target as HTMLInputElement;
  if (PhoneNumberProcessor.validateNumberWithPrefix(el.value)) {
    const data = await fetchApiPhoneData(el.value);
    if (data.error) apiError.value = data.error;
    if (data?.countryName) {
      console.log(data);
      props.phoneData.code = `+${data.countryCode}`;
      props.phoneData.countryId = data.country;
      props.phoneData.countryName = data.countryName;
      props.phoneData.number = PhoneNumberProcessor.removeCodeFromNumber(
        el.value,
        props.phoneData.code
      );
    } else {
      props.phoneData.code = "";
      props.phoneData.countryId = "";
      props.phoneData.countryName = "";
      props.phoneData.number = "";
    }
  }
};
</script>

<template>
  <div class="flex flex-col gap-2 items-start">
    <label>{{ $t(`fields.${name}.label`) }}</label>
    <input
      name="phone"
      type="tel"
      @input="handleChangePhoneData"
      required
      :placeholder="$t(`fields.${name}.placeholder`)"
    />
  </div>
  <p class="text-xl text-accent font-bold text-center" v-if="apiError">
    {{ $t(`fields.${name}.api-error`) }}
  </p>
</template>
