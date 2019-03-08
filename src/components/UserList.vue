<template>
  <div class="user-list-wrapper">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Avatar</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <img :src="user.picture" height="50" />
          </td>
          <td>{{ user.firstName | toUpperCase }}</td>
          <td>{{ user.lastName | toUpperCase }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary btn-margin"
              @click="editUser(user.id)"
            >
              <i class="fa fa-edit"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      <span>Count of Users: {{ countOfUsers }}</span>
    </p>
  </div>
</template>

<script>
export default {
  filters: {
    toUpperCase: function(value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    countOfUsers: function() {
      return this.users.length;
    }
  },
  methods: {
    editUser: function() {
      //this.$emit('edit-user', id);
    }
  }
};
</script>

<style>
.btn-margin {
  margin-right: 5px;
}
</style>
