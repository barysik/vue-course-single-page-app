<template>
  <div class="user-list">
    <h1>Phonebook</h1>
    <List :url="apiRoute">
      <template v-slot:table-header>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone Number</th>
        </tr>
      </template>
      <template v-slot:table-row="{ item, globalIndex }">
        <th scope="row">
          {{ globalIndex }}
        </th>
        <td class="to-upper-case">{{ item.firstName }}</td>
        <td class="to-upper-case">{{ item.lastName }}</td>
        <td>{{ item.phone }}</td>
      </template>
    </List>
  </div>
</template>

<script>
import AppSettings from "@/settings.js";

export default {
  name: "UsersListPage",
  components: {
    List: () => import("@/components/List/List.vue")
  },
  computed: {
    apiRoute: function() {
      return AppSettings.api.path + "users/";
    }
  }
};
</script>

<style>
.user-list {
  padding: 0 1.5rem 1.5rem;
}
</style>
