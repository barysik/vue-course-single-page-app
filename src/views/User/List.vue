<template>
  <div class="user-list">
    <h1>Users</h1>
    <List
      :url="apiRoute"
      @edit-list-item="editItem"
      @remove-list-item="removeItem"
    >
      <template v-slot:table-header>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Avatar</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Actions</th>
        </tr>
      </template>
      <template
        v-slot:table-row="{ item, globalIndex, editListItem, removeListItem }"
      >
        <th scope="row">
          {{ globalIndex }}
        </th>
        <td>
          <img :src="item.picture" height="50" />
        </td>
        <td class="to-upper-case">{{ item.firstName }}</td>
        <td class="to-upper-case">{{ item.lastName }}</td>
        <td>{{ item.email }}</td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary"
              @click="editListItem(item.id)"
            >
              <i class="fa fa-edit"></i>
            </button>
            <button
              type="button"
              class="btn btn-dark"
              @click="removeListItem(item.id)"
            >
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </td>
      </template>
    </List>
  </div>
</template>

<script>
import AppSettings from "@/settings.js";
import axios from "axios";

export default {
  name: "UsersListPage",
  components: {
    List: () => import("@/components/List/List.vue")
  },
  computed: {
    apiRoute: function() {
      return AppSettings.api.path + "users/";
    }
  },
  methods: {
    editItem(id) {
      this.$router.push("/users/edit/" + id);
    },
    removeItem(id) {
      axios.delete(this.apiRoute + id).then(() => {
        this.$toasted.success("Success", {
          position: "top-center",
          duration: 1000
        });
      });
    }
  }
};
</script>

<style>
.user-list {
  padding: 0 1.5rem 1.5rem;
}
</style>
