<template>
  <div class="user-list">
    <h1>Users</h1>
    <div v-if="isLoading" class="alert alert-warning" role="alert">
      Loading...
    </div>
    <UserList v-else :users="users" @remove-user="removeUser"></UserList>
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from "@/components/UserList.vue";
import AppSettings from "@/settings.js";
import axios from "axios";

export default {
  name: "UserPage",
  components: {
    UserList
  },
  data: function() {
    return {
      users: [],
      isLoading: true
    };
  },
  computed: {
    apiRoute: function() {
      return "users/";
    }
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
    loadUsers: function() {
      axios
        .get(AppSettings.api.path + this.apiRoute)
        .then(response => response.data)
        .then(users => {
          this.isLoading = false;
          this.users = users;
        });
    },
    removeUser: function(id) {
      axios.delete(AppSettings.api.path + this.apiRoute + id).then(() => {
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
