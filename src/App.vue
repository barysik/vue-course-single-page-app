<template>
  <div id="app">
    <StaticNavBar></StaticNavBar>

    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import StaticNavBar from "@/components/StaticNavBar.vue";

export default {
  name: "App",
  components: {
    StaticNavBar
  }
};
</script>
