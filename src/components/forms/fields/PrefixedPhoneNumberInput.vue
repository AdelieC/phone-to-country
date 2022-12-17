<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import fetchApiPhoneData, { APIS } from "@/utils/api/fetchApiPhoneData";
import PhoneNumberProcessor from "@/utils/services/PhoneNumberProcessor";
import type { CountryData } from "../types/CountryData";
import type { PhoneData } from "../types/PhoneData";
import Hint from "./parts/Hint.vue";
import Error from "./parts/Error.vue";

const apiFailure = ref(false);
const invalidNumber = ref(false);
const APIsList = Object.keys(APIS);

const currentApi = ref(APIsList[0]);

const props = defineProps({
  phoneData: { type: Object as PropType<PhoneData>, required: true },
  name: { type: String, required: true },
  countriesData: { type: Array<CountryData>, required: true },
});

const handleChangePhoneData = async (event: Event) => {
  const el = event.target as HTMLInputElement;
  if (PhoneNumberProcessor.validateNumberWithPrefix(el.value)) {
    const data = await fetchApiPhoneData(el.value, currentApi.value);
    if (!data) {
      apiFailure.value = true;
      return;
    }
    if (data?.ok) {
      apiFailure.value = false;
      invalidNumber.value = false;
      props.phoneData.code = data.countryCode;
      props.phoneData.countryId = data.countryId;
      props.phoneData.countryName = data.countryName;
      props.phoneData.number = PhoneNumberProcessor.removeCodeFromNumber(
        el.value,
        props.phoneData.code
      );
    } else {
      apiFailure.value = false;
      invalidNumber.value = true;
      props.phoneData.code = "";
      props.phoneData.countryId = "";
      props.phoneData.countryName = "";
      props.phoneData.number = "";
    }
  }
};
</script>

<template>
  <div class="flex h-full flex-col gap-10 items-stretch justify-around">
    <div class="flex flex-col lg:flex-row gap-8 text-sm">
      <button
        v-for="api in APIsList"
        :class="currentApi === api ? 'text-warning' : ''"
        class="underline"
        @click="() => (currentApi = api)"
      >
        {{ $t(`fields.${name}.choose-api`) }} {{ api }}
      </button>
    </div>
    <fieldset>
      <label>{{ $t(`fields.${name}.label`) }}</label>
      <input
        name="phone"
        type="tel"
        @input="handleChangePhoneData"
        required
        :placeholder="$t(`fields.${name}.placeholder`)"
      />
      <Hint :input-name="name" />
      <Error v-show="invalidNumber" :input-name="name" />
      <Error v-show="apiFailure" :input-name="name" error-key="api-error" />
    </fieldset>
  </div>
</template>
