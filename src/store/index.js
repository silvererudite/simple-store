import { createStore } from "vuex";

export default createStore({
  state: {
    refresh_token: "",
    access_token: "",
    loggedInUser: {},
    isAuthenticated: false,
    products: "",
    sideBarOpen: false,
  },
  mutations: {
    setProducts: function (state, payload) {
      state.products = payload;
    },
    setAccessToken: function (state, accessToken) {
      state.access_token = accessToken;
    },
    // sets state with user information and toggles
    // isAuthenticated from false to true
    setLoggedInUser: function (state, user) {
      state.loggedInUser = user;
      state.isAuthenticated = true;
    },
    // delete all auth and user information from the state
    clearUserData: function (state) {
      state.refresh_token = "";
      state.access_token = "";
      state.loggedInUser = {};
      state.isAuthenticated = false;
    },
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
  },
  actions: {
    refreshToken() {
      const t = JSON.parse(localStorage.getItem("refresh_token"));
      this.$service
        .refreshToken(t)
        .then((res) => {
          //console.log("this", res.data.createdUser);
          this.LocalStore("access_token", res.data.access_token);
        })
        .catch(() => {
          //this.ErrorAlert("Please put correct email/password");
        });
    },
    getProducts({ commit }, that) {
      that.$service
        .getProducts()
        .then((res) => {
          commit("setProducts", res.data.products);
        })
        .catch(() => {
          this.ErrorAlert("Something went wrong!");
        });
    },
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    },
  },
  getters: {
    allProducts: (state) => state.products,
    isAuthenticated: (state) => state.isAuthenticated,
    accessToken: (state) => state.access_token,
    refreshToken: (state) => state.refresh_token,
    sideBarOpen: (state) => {
      return state.sideBarOpen;
    },
  },
  modules: {},
});
