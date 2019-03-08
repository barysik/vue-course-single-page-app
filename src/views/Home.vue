<template>
  <div class="home">
    <UserList :users="users"></UserList>
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from "@/components/UserList.vue";
import axios from "axios";

export default {
  name: "Home",
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
      axios.get("http://localhost:3004/users").then(function(response) {
        self.users = response.data;
      });
    }
  }
};
</script>
