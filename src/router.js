import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/users",
      component: () => import("@/views/User/List.vue")
    },
    {
      path: "/users/edit/:id",
      component: () => import("@/views/User/Edit.vue")
    },
    {
      path: "/users/add",
      component: () => import("@/views/User/Add.vue")
    },
    {
      path: "/users/phonebook",
      component: () => import("@/views/User/Phonebook.vue")
    }
  ]
});
