import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

import "./assets/main.css";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "fr",
  fallbackLocale: "fr",
  availableLocales: ["en", "fr"],
  messages: messages,
});

const app = createApp(App);

app.use(i18n);

app.use(router);

app.mount("#app");
