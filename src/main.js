import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Toasted from "vue-toasted";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(Toasted);
