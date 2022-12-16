<script setup lang="ts">
import HomeButton from "@/components/buttons/HomeButton.vue";
const buttonsProps = [
  {
    path: "/json-double-input",
    label: "Double champ",
    description:
      "Champ texte pour le code pays, champ texte pour le reste du numéro",
  },
  {
    path: "/api-single-input",
    label: "Champ simple avec API externe",
    description: "Un seul champ texte pour code + téléphone",
  },
  {
    path: "/select-and-input",
    label: "Select pays + champ",
    description:
      "Select pour le code pays + champ texte pour le reste du téléphone",
  },
];
</script>

<template>
  <div
    class="grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-around max-w-4xl"
  >
    <HomeButton
      v-for="item in buttonsProps"
      :label="item.label"
      :path="item.path"
      :description="item.description"
    />
  </div>
</template>
