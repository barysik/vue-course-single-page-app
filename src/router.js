import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserList from "@/views/User/List.vue";
import UserEdit from "@/views/User/Edit.vue";
import UserAdd from "@/views/User/Add.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users",
      name: "users",
      component: UserList
    },
    {
      path: "/users/edit/:id",
      name: "editUser",
      component: UserEdit
    },
    {
      path: "/users/add",
      name: "addUser",
      component: UserAdd
    }
  ],
  linkExactActiveClass: "active"
});
