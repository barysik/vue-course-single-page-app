<template>
  <div class="user-add-page-wrapper col-6">
    <h1>Add user</h1>
    <UserEditForm v-if="user" :user="user" @save-user="saveUser"></UserEditForm>
  </div>
</template>

<script>
import UserEditForm from "@/components/UserEditForm.vue";
import axios from "axios";

export default {
  name: "UserAddPage",
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
      this.user = {};
    },
    saveUser: function(editedUser) {
      var self = this;
      axios.post("http://localhost:3004/users", editedUser).then(function() {
        self.$toasted.success("Success", {
          position: "top-center",
          duration: 1000
        });
      });
    }
  }
};
</script>
