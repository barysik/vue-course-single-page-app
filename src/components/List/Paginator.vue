<template>
  <nav aria-label="pagination">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="prevPage">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ListPaginator",
  model: {
    prop: "currentPage"
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    lastPage() {
      return Math.ceil(this.totalCount / this.itemsPerPage);
    }
  },
  methods: {
    prevPage() {
      const prev = this.currentPage - 1;
      if (prev > 0) {
        this.selectPage(prev);
      }
    },
    nextPage() {
      const next = this.currentPage + 1;
      if (next <= this.lastPage) {
        this.selectPage(next);
      }
    },
    selectPage(value) {
      if (value > 0 && value <= this.lastPage) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
