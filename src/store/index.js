import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    refresh_token: "",
    access_token: "",
    loggedInUser: {},
    isAuthenticated: false,
    products: "",
    sideBarOpen: true,
    user: "",
    viewProducts: "",
    cart: "",
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setCart: function (state, payload) {
      state.cart = payload;
    },
    // sets state with user information and toggles
    // isAuthenticated from false to true
    setUserInfo(state, user) {
      state.user = user;
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
    refreshToken(that) {
      const t = localStorage.getItem("refresh_token");
      const param = {
        refresh_token: t,
      };
      //console.log("inside store1");
      that.$service
        .refreshToken(param)
        .then((res) => {
          //console.log("inside store2");
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
          //this.ErrorAlert("Something went wrong!");
        });
    },
    updateProduct({ dispatch }, id, body, that) {
      that.$service
        .updateProductByid(id, body)
        .then(() => {
          dispatch("getProducts", this);
        })
        .catch(() => {
          //this.ErrorAlert("Something went wrong!");
        });
    },
    updateCart({ commit }, payload) {
      commit("setCart", payload);
    },
    toggleSidebar({ commit }) {
      commit("toggleSidebar");
    },
    triggerUserSetting({ commit }, payload) {
      commit("setUserInfo", payload);
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
