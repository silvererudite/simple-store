<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <Sidebar />

      <div
        class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
        :class="sideBarOpen ? 'overlay' : ''"
        id="main-content"
      >
        <div class="p-6 bg-gray-100 mb-20">
          <ProfileDetail />
        </div>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import ProfileDetail from "@/components/ProfileDetail.vue";

export default {
  name: "Dashboard",
  computed: {
    ...mapState(["sideBarOpen"]),
  },
  components: {
    Sidebar,
    Footer,
    ProfileDetail,
  },
  created() {
    this.$service
      .profileInfo(this.$route.params.id)
      .then((res) => {
        this.user = res.data.user;
      })
      .catch((err) => this.ErrorAlert(err));
  },
  methods: {
    fetchProd() {
      this.$store.dispatch("getProducts", this);
    },
  },
};
</script>
