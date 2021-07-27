<!--./src/components/NavBar.vue -->

<template>
  <header>
    <div class="w-full container mx-auto p-6">
      <div class="w-full flex items-center justify-between">
        <router-link
          to="/"
          class="
            flex
            items-center
            text-indigo-600
            no-underline
            hover:no-underline
            font-bold
            text-2xl
            lg:text-4xl
            sm:pl-14
          "
        >
          Simple Store
        </router-link>

        <div class="flex w-1/2 justify-end content-center">
          <router-link to="/login">
            <Btn
              class="px-3 py-2 text-indigo-600 text-xs rounded"
              v-if="!loggedIn"
              >Log In</Btn
            >
          </router-link>
          <router-link to="/signup">
            <Btn
              v-if="!loggedIn"
              class="px-3 py-2 bg-indigo-600 text-white text-xs rounded"
              >Sign Up</Btn
            >
          </router-link>
          <router-link to="/login">
            <Btn
              class="
                px-3
                py-2
                border-2 border-indigo-600
                text-indigo-600 text-xs
                rounded
              "
              v-if="loggedIn"
              @click.prevent="this.Logout()"
              >log out</Btn
            >
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Btn from "@/components/Button.vue";
export default {
  name: "NavBar",
  components: {
    Btn,
  },
  computed: {
    loggedIn() {
      return this.SignedIn();
    },
  },
  methods: {
    goLogin() {
      this.Goto({ name: "Login" });
    },
    goSignup() {
      this.Goto({ name: "signup" });
    },
  },
};
</script>
