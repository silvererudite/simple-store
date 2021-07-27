<template>
  <div id="app">
    <NavBar :key="$route.fullPath" />

    <router-view />
    <Footer />
  </div>
</template>

<script type="text/javascript">
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
.colored-toast .swal2-title {
  color: black;
}

.colored-toast .swal2-close {
  color: black;
}

.colored-toast .swal2-content {
  color: black;
}
</style>
