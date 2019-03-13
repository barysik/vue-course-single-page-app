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
        <label for="age">Age</label>
        <input
          id="age"
          v-model="localUser.age"
          type="number"
          name="age"
          placeholder="Enter user age"
          class="form-control"
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
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          id="phone"
          v-model="localUser.phone"
          type="tel"
          name="phone"
          class="form-control"
          placeholder="Enter phone number"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          id="address"
          v-model="localUser.address"
          type="text"
          name="address"
          placeholder="Enter address"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <input
          id="company"
          v-model="localUser.company"
          type="text"
          name="company"
          placeholder="Enter company name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="pictureUrl">Avatar's URL</label>
        <input
          id="pictureUrl"
          v-model="localUser.picture"
          type="text"
          name="pictureUrl"
          class="form-control"
          placeholder="Enter avatar's URL"
        />
      </div>

      <div class="form-check">
        <input
          id="isActive"
          v-model="localUser.isActive"
          type="checkbox"
          name="isActive"
          class="form-check-input"
        />
        <label for="isActive" class="form-check-label">Is active</label>
      </div>
      <div class="form-group">
        <label for="accessLevel">Access level</label>
        <select
          id="accessLevel"
          v-model="localUser.accessLevel"
          name="accessLevel"
          class="form-control"
        >
          <option
            v-for="level in userAccessLevelsList"
            :key="level"
            :value="level"
            >{{ level }}</option
          >
        </select>
      </div>
      <div class="form-group">
        <label for="balance">Balance</label>
        <input
          id="balance"
          v-model="localUser.balance"
          type="text"
          name="balance"
          class="form-control"
          placeholder="Enter balance"
        />
      </div>
      <div class="form-group">
        <label for="about">About</label>
        <textarea
          id="about"
          v-model="localUser.about"
          name="about"
          rows="3"
          placeholder="Enter something about user"
          class="form-control"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      localUser: null
    };
  },
  computed: {
    userAccessLevelsList: function() {
      return ["guest", "user", "admin"];
    }
  },
  watch: {
    localUser: {
      deep: true,
      handler: "syncUser"
    }
  },
  mounted: function() {
    //init local users
    this.localUser = Object.assign({}, this.value);
  },
  methods: {
    syncUser: function() {
      this.$emit("input", this.localUser);
    },
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
