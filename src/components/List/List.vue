<template>
  <div class="user-list-wrapper">
    <div v-if="isLoading" class="alert alert-warning" role="alert">
      Loading...
    </div>
    <div v-else class="form-body">
      <div class="row float-right">
        <h4>
          <span>Count of Items: {{ countOfItems }}</span>
          <span> | Current Page: {{ currentPage }}</span>
        </h4>
      </div>
      <table class="table table-striped">
        <thead>
          <slot name="table-header"></slot>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredItems" :key="item.id">
            <slot
              name="table-row"
              :item="item"
              :globalIndex="indexOfItem(index)"
              :editListItem="editListItem"
              :removeListItem="removeListItem"
            >
            </slot>
          </tr>
        </tbody>
      </table>
      <div class="pagination-warpper row">
        <div class="pagination-filter d-inline col-2">
          <label>Show in list: </label>
          <div class="col-6" style="display: inline-block;">
            <itemsPerPageSelector
              v-model.number="itemsPerPage"
            ></itemsPerPageSelector>
          </div>
        </div>
        <div class="col-10">
          <div class="float-right">
            <paginator
              v-model.number="currentPage"
              :total-count="countOfItems"
              :items-per-page="itemsPerPage"
            ></paginator>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsPerPageSelector from "@/components/List/ItemsPerPageSelector.vue";
import paginator from "@/components/List/Paginator.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "List",
  components: {
    itemsPerPageSelector,
    paginator
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      list: [],
      itemsPerPage: 5,
      currentPage: 1,
      isLoading: false
    };
  },
  computed: {
    countOfItems() {
      return this.list.length;
    },
    filteredItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const finalIndex = startIndex + this.itemsPerPage;
      return this.list.slice(startIndex, finalIndex);
    }
  },
  watch: {
    itemsPerPage() {
      this.currentPage = 1;
    }
  },
  mounted: function() {
    this.loadItems();
  },
  methods: {
    loadItems: function() {
      this.isLoading = true;
      axios
        .get(this.url)
        .then(response => response.data)
        .then(items => {
          this.isLoading = false;
          this.list = items;
        });
    },
    indexOfItem(index) {
      return (this.currentPage - 1) * this.itemsPerPage + index + 1;
    },
    editListItem(id) {
      this.$emit("edit-list-item", id);
    },
    removeListItem(id) {
      this.$emit("remove-list-item", id);
      console.log(_.findIndex(this.list, ["id", id]));
      this.list.splice(_.findIndex(this.list, ["id", id]), 1);
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
