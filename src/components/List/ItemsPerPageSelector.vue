<template>
  <select
    id="elementsOnPage"
    class="form-control"
    :value="itemsPerPage"
    name="elementsOnPage"
    @change="changed($event.target.value)"
  >
    <option
      v-for="countPoint in elementsOnPageList"
      :key="countPoint"
      :value="countPoint"
      >{{ countPoint }}</option
    >
  </select>
</template>

<script>
export default {
  name: "ItemsPerPageSelector",
  model: {
    prop: "itemsPerPage"
  },
  props: {
    itemsPerPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    elementsOnPageList: function() {
      return [5, 10, 15];
    }
  },
  methods: {
    changed(value) {
      this.$emit("input", value);
    }
  }
};
</script>
