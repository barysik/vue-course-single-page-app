<template>
  <div class="pagination-filter d-inline col-3">
    <!-- <label for="elementsOnPage">Show in list: </label>
    <select
      id="elementsOnPage"
      v-model="localFilter.pagination.elementsOnPage"
      name="elementsOnPage"
    >
      <option
        v-for="countPoint in elementsOnPageList"
        :key="countPoint"
        :value="countPoint"
        >{{ countPoint }}</option
      >
    </select> -->
  </div>
</template>

<script>
export default {
  name: "PaginationListItems"
  // model: {
  //   prop: "localFilter",
  //   event: "input"
  // },
  // props: {
  //   localFilter: {
  //     type: Object,
  //     required: true
  //   }
  // },
  // computed: {
  //   elementsOnPageList: function() {
  //     return [5, 10, 15];
  //   }
  // }
};
</script>
