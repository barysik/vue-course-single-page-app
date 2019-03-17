<template>
  <div class="user-list">
    <h1>Users</h1>
    <div v-if="isLoading" class="alert alert-warning" role="alert">
      Loading...
    </div>
    <List v-else :users="users" @remove-user="removeUser"></List>
  </div>
</template>

<script>
import AppSettings from "@/settings.js";
import axios from "axios";

export default {
  name: "UsersListPage",
  components: {
    List: () => import("@/components/List/List.vue")
  },
  data: function() {
    return {
      users: [],
      isLoading: true
    };
  },
  computed: {
    apiRoute: function() {
      return AppSettings.api.path + "users/";
    }
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
    loadUsers: function() {
      axios
        .get(this.apiRoute)
        .then(response => response.data)
        .then(users => {
          this.isLoading = false;
          this.users = users;
        });
    },
    removeUser: function(id) {
      axios.delete(this.apiRoute + id).then(() => {
        this.$toasted.success("Success", {
          position: "top-center",
          duration: 1000
        });
        this.loadUsers();
      });
    }
  }
};
</script>

<style>
.user-list {
  padding: 0 1.5rem 1.5rem;
}
</style>
