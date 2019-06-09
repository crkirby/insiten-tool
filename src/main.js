import Vue from "vue";
import router from "./router";
import store from "./store/index";
import VModal from "vue-js-modal";
import App from "./App.vue";
import { Plugin } from "vue-fragment";
import filters from "./filters/filters";

Vue.config.productionTip = false;
Vue.filter("toFiat", filters.toFiat);
Vue.use(Plugin);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
