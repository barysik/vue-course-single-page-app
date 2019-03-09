<template>
  <div class="user-list">
    <h1>Users</h1>
    <UserList :users="users" @remove-user="removeUser"></UserList>
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from "@/components/UserList.vue";
import axios from "axios";

export default {
  name: "UserPage",
  components: {
    UserList
  },
  data: function() {
    return {
      users: []
    };
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
    loadUsers: function() {
      var self = this;
      axios
        .get("http://localhost:3004/users")
        .then(function(response) {
          return response.data;
        })
        .then(function(users) {
          self.users = users;
        });
    },
    removeUser: function(id) {
      var self = this;
      axios.delete("http://localhost:3004/users/" + id).then(function() {
        self.$toasted.success("Success", {
          position: "top-center",
          duration: 1000
        });
        self.loadUsers();
      });
    }
  }
};
</script>
