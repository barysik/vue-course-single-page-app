import Vue from "vue";
import App from "@App.vue";
import router from "@router.js";
import Toasted from "vue-toasted";
import NProgress from "vue-nprogress";
import "@bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

const nprogress = new NProgress({ parent: ".nprogress-container" });
const options = {
  latencyThreshold: 100,
  router: true,
  axios: true
};

Vue.config.productionTip = false;

Vue.use(Toasted);
Vue.use(NProgress, options);

new Vue({
  router,
  nprogress,
  render: h => h(App)
}).$mount("#app");
