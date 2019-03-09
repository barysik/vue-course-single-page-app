<template>
  <div class="user-edit-page-wrapper col-6">
    <h1>Edit user</h1>
    <UserEditForm v-if="user" :user="user" @save-user="saveUser"></UserEditForm>
  </div>
</template>

<script>
import UserEditForm from "@/components/UserEditForm.vue";
import axios from "axios";

export default {
  name: "UserEditPage",
  components: {
    UserEditForm
  },
  data: function() {
    return {
      user: null
    };
  },
  mounted: function() {
    this.loadUser();
  },
  methods: {
    loadUser: function() {
      var self = this;
      axios
        .get("http://localhost:3004/users/" + this.$route.params.id)
        .then(function(response) {
          return response.data;
        })
        .then(function(user) {
          self.user = user;
        });
    },
    saveUser: function(editedUser) {
      axios
        .put("http://localhost:3004/users/" + this.$route.params.id, editedUser)
        .then(function(response) {
          console.log(response);
        });
    }
  }
};
</script>
