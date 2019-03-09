<template>
  <div class="template-wrapper">
    <form v-if="localUser">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          id="firstName"
          v-model="localUser.firstName"
          type="text"
          class="form-control"
          placeholder="Enter First Name"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          v-model="localUser.lastName"
          type="text"
          class="form-control"
          placeholder="Enter Last Name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          id="email"
          v-model="localUser.email"
          type="email"
          class="form-control"
          placeholder="Enter email"
        />
      </div>
      <button type="button" class="btn btn-warning float-left" @click="goBack">
        Back
      </button>
      <button
        type="button"
        class="btn btn-primary float-right"
        @click="saveUser"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      localUser: null
    };
  },
  mounted: function() {
    //init local users
    let temp = {};
    Object.assign(temp, this.user);
    this.localUser = temp;
  },
  methods: {
    saveUser: function() {
      this.$emit("save-user", this.localUser);
    },
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
