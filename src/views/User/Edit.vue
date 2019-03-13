<template>
  <div class="user-edit-page-wrapper col-6">
    <h1>Edit user</h1>
    <div v-if="!user" class="alert alert-warning" role="alert">
      Loading...
    </div>
    <UserEditForm v-else v-model="user"></UserEditForm>

    <button type="button" class="btn btn-warning float-left" @click="goBack">
      Back
    </button>
    <button type="button" class="btn btn-primary float-right" @click="saveUser">
      Submit
    </button>
  </div>
</template>

<script>
import UserEditForm from "@/components/UserEditForm.vue";
import AppSettings from "@/settings.js";
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
  computed: {
    userId: function() {
      return this.$route.params.id;
    },
    apiRoute: function() {
      return "users/";
    }
  },
  mounted: function() {
    this.loadUser();
  },
  methods: {
    loadUser: function() {
      axios
        .get(AppSettings.api.path + this.apiRoute + this.userId)
        .then(response => response.data)
        .then(user => {
          this.user = user;
        });
    },
    saveUser: function() {
      axios
        .put(AppSettings.api.path + this.apiRoute + this.userId, this.user)
        .then(() => {
          this.$toasted.success("Success", {
            position: "top-center",
            duration: 1000
          });
        });
    },
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
