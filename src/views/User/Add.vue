<template>
  <div class="user-add-page-wrapper col-6">
    <h1>Add user</h1>
    <UserEditForm v-model="user"></UserEditForm>

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
  name: "UserAddPage",
  components: {
    UserEditForm
  },
  data: function() {
    return {
      user: {}
    };
  },
  computed: {
    apiRoute: function() {
      return "users/";
    }
  },
  methods: {
    saveUser: function() {
      axios.post(AppSettings.api.path + this.apiRoute, this.user).then(() => {
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
