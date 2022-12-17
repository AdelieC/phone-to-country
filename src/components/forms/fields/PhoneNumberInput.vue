<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type { CountryData } from "../types/CountryData";
import type { PhoneData } from "../types/PhoneData";
import PhoneNumberProcessor from "@/utils/services/PhoneNumberProcessor";
import Hint from "./parts/Hint.vue";
import Error from "./parts/Error.vue";

const error = ref(false);

const props = defineProps({
  phoneData: { type: Object as PropType<PhoneData>, required: true },
  name: { type: String, required: true },
  countriesData: { type: Array<CountryData>, required: true },
});

const handleChangeNumber = (event: Event) => {
  const el = event.target as HTMLInputElement;
  props.phoneData.number = PhoneNumberProcessor.removeCodeFromNumber(
    el.value,
    props.phoneData.code
  );
};

const formatPhoneNumber = (event: Event) => {
  const el = event.target as HTMLInputElement;
  el.value = PhoneNumberProcessor.removeCodeFromNumber(
    el.value,
    props.phoneData.code
  );
};
</script>

<template>
  <fieldset>
    <label>{{ $t(`fields.${name}.label`) }}</label>
    <input
      name="phone"
      type="tel"
      @input="handleChangeNumber"
      @blur="formatPhoneNumber"
      required
      :placeholder="$t(`fields.${name}.placeholder`)"
    />
    <Hint :input-name="name" />
    <Error v-show="error" :input-name="name" />
  </fieldset>
</template>
