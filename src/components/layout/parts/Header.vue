<script setup lang="ts">
import { ref } from "vue";
import LanguageSelect from "./LanguageSelect.vue";
import { RouterLink } from "vue-router";
import routes from "../../../router/routes";

const filteredRoutes = routes.filter((route) => route.meta.isNav);

const toggleMenu = ref(false);
const toggle = () => {
  toggleMenu.value = !toggleMenu.value;
};
</script>

<template>
  <header
    class="w-screen flex gap-8 items-center justify-between p-8 font-display relative"
  >
    <div class="flex gap-4 items-center justify-between">
      <img class="h-12 lg:h-16" alt="App logo" src="../../../assets/logo.svg" />
      <p class="text-2xl xl:text-4xl 2xl:text-5xl font-bold">
        <span class="">{{ $t("app.name.neutral") }}</span
        ><span class="text-warning">{{ $t("app.name.accent") }}</span>
      </p>
    </div>
    <nav
      class="hidden gap-8 font-bold xl:text-xl 2xl:text-2xl uppercase xl:flex"
    >
      <RouterLink
        v-for="route in filteredRoutes"
        :to="route.path"
        exact-active-class="text-warning"
      >
        {{ $t(`nav.${route.name}.nav-name`) }}
      </RouterLink>
    </nav>
    <LanguageSelect />
    <div @click="toggle" class="flex lg:hidden">
      <button
        type="button"
        class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
      >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
    </div>

    <nav
      :class="toggleMenu ? 'flex' : 'hidden'"
      class="bg-primary-light h-screen p-8 fixed top-0 right-0 flex-col justify-around gap-8 space-y-4 font-bold text-xl items-end shadow-2xl"
    >
      <button @click="toggle">
        <svg
          x="0px"
          y="0px"
          class="w-4 h-4 fill-current"
          viewBox="0 0 47.971 47.971"
        >
          <g>
            <path
              d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
            />
          </g>
        </svg>
      </button>
      <RouterLink
        v-for="route in filteredRoutes"
        :to="route.path"
        exact-active-class="text-warning"
        class="hover:text-accent"
      >
        {{ $t(`nav.${route.name}.nav-name`) }}
      </RouterLink>
    </nav>
  </header>
</template>
