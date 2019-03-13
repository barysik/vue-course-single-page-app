import Vue from "vue";
import App from "@/App.vue";
import router from "@/router.js";
import Toasted from "vue-toasted";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

Vue.use(Toasted);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
