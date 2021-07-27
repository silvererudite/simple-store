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
            text-indigo-400
            no-underline
            hover:no-underline
            font-bold
            text-2xl
            lg:text-4xl
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 fill-current text-indigo-600 pr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Simple Store
        </router-link>

        <div class="flex w-1/2 justify-end content-center">
          <router-link to="/login">
            <Btn v-if="!loggedIn">Log In</Btn>
          </router-link>
          <router-link to="/signup">
            <Btn v-if="!loggedIn">Sign Up</Btn>
          </router-link>
          <router-link to="/login">
            <Btn v-if="loggedIn" @click.prevent="this.Logout()">log out</Btn>
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
