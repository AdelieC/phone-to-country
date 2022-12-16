<template>
  <div class="flex gap-4 items-center">
    <label for="locale">{{ $t("language-select.locale") }}</label>
    <select v-model="$i18n.locale" id="locale">
      <option v-for="locale in $i18n.availableLocales" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>
