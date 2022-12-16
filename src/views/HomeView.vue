<script setup lang="ts">
import HomeButton from "@/components/buttons/HomeButton.vue";
import routes from "../router/routes";

const filteredRoutes = routes.filter((route) => route.meta.isHomepageButton);
const buttonsProps = [
  {
    path: "/double-input",
    label: "Double champ",
    description:
      "Champ texte pour le code pays, champ texte pour le reste du numéro",
  },
  {
    path: "/single-input",
    label: "Champ simple avec API externe",
    description: "Un seul champ texte pour code + téléphone",
  },
  {
    path: "/select-with-input",
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
      v-for="route in filteredRoutes"
      :label="$t(`nav.${route.name}.label`)"
      :path="route.path"
      :description="$t(`nav.${route.name}.description`)"
    />
  </div>
</template>
