import VueI18n from "vue-i18n";
import en from "./en.json";
import de from "./de.json";
import zhCh from "./zh-ch.json";
import Vue from "vue";

Vue.use(VueI18n);

const messages = {
  en,
  de,
  "zh-ch": zhCh,
};

export const i18n = new VueI18n({
  locale: "de",
  messages,
});
