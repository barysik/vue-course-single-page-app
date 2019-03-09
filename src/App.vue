<template>
  <div id="app">
    <NprogressContainer></NprogressContainer>

    <StaticNavBar></StaticNavBar>

    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import StaticNavBar from "@/components/StaticNavBar.vue";
import NprogressContainer from "vue-nprogress/src/NprogressContainer.vue";

export default {
  components: {
    StaticNavBar,
    NprogressContainer
  }
};
</script>
