<template>
  <div class="user-list-wrapper form-body">
    <h4>
      <span>Count of Users: {{ countOfUsers }}</span>
      <span> | Current Page: {{ filter.pagination.currentPage }}</span>
    </h4>
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
        <tr v-for="(user, index) in filteredUsers" :key="user.id">
          <th scope="row">
            {{
              (filter.pagination.currentPage - 1) *
                filter.pagination.elementsOnPage +
                index +
                1
            }}
          </th>
          <td>
            <img :src="user.picture" height="50" />
          </td>
          <td class="to-upper-case">{{ user.firstName }}</td>
          <td class="to-upper-case">{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>
            <div class="btn-group">
              <router-link
                :to="'/users/edit/' + user.id"
                class="btn btn-primary"
                tag="button"
                ><i class="fa fa-edit"></i
              ></router-link>
              <button
                type="button"
                class="btn btn-dark"
                @click="removeUser(user.id)"
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination-warpper">
      <div class="pagination-filter d-inline col-3">
        <label for="elementsOnPage">Show in list: </label>
        <select
          id="elementsOnPage"
          v-model="filter.pagination.elementsOnPage"
          name="elementsOnPage"
        >
          <option
            v-for="countPoint in elementsOnPageList"
            :key="countPoint"
            :value="countPoint"
            >{{ countPoint }}</option
          >
        </select>
      </div>
      <nav aria-label="pagination" class="float-right d-inline">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" @click="toPrevPage">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="toNextPage">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      filter: {
        pagination: {
          currentPage: 1,
          elementsOnPage: 5
        }
      },
      filteredUsers: []
    };
  },
  computed: {
    countOfUsers: function() {
      return this.users.length;
    },
    elementsOnPageList: function() {
      return [5, 10, 15];
    }
  },
  watch: {
    filter: {
      deep: true,
      handler: "filterUsers"
    }
  },
  mounted: function() {
    this.filterUsers();
  },
  methods: {
    removeUser: function(id) {
      this.$emit("remove-user", id);
    },
    filterUsers: function() {
      this.filteredUsers = this.users.slice(
        (this.filter.pagination.currentPage - 1) *
          this.filter.pagination.elementsOnPage,
        this.filter.pagination.currentPage *
          this.filter.pagination.elementsOnPage
      );
    },
    toPrevPage: function() {
      if (this.filter.pagination.currentPage - 1) {
        this.filter.pagination.currentPage =
          this.filter.pagination.currentPage - 1;
      }
    },
    toNextPage: function() {
      if (
        this.filter.pagination.currentPage *
          this.filter.pagination.elementsOnPage +
          1 <=
        this.countOfUsers
      ) {
        this.filter.pagination.currentPage =
          this.filter.pagination.currentPage + 1;
      }
    }
  }
};
</script>

<style>
.to-upper-case {
  text-transform: uppercase;
}
.form-body {
  position: relative;
  padding: 1.5rem;
  margin: 1rem -15px 0;
  border: solid #f7f7f9;
  border-width: 0.2rem;
}
</style>
