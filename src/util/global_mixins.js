import alert from "sweetalert2";

const mixins = {
  methods: {
    ErrorAlert: (msg) => {
      alert.fire({
        text: msg,
        target: "#error-alert",
        icon: "error",
        iconColor: "#e20000",
        animation: false,
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: true,
        customClass: {
          popup: "colored-toast",
          content: "error-alert-text",
          timer: 3000,
        },
        toast: true,
        position: "center",
      });
    },
    SuccessAlert: (msg) => {
      alert.fire({
        text: msg,
        timer: 3000,
        target: "#success-alert",
        icon: "success",
        iconColor: "#23af4c",
        animation: false,
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: true,
        customClass: {
          popup: "colored-toast",
          content: "success-alert-text",
        },
        toast: true,
        position: "center",
      });
    },
    TimerAlert: (title, msg, timer) => {
      alert.fire({
        title: title,
        html: msg,
        timer: timer,
        timerProgressBar: true,
      });
    },
    Alert: (title, message, type) => {
      alert.fire(title, message, type);
    },
    /**
     * @return {number}
     */
    Goto(obj) {
      this.$router.push(obj);
    },
    GotoProfile() {
      this.$router.push({ name: "user_profile" });
    },
    Loaded() {
      this.$store.state.loaded = true;
    },
    /**
     * @return {boolean}
     */
    SignedIn() {
      let token = localStorage.getItem("access_token");
      return !!token;
    },
    RemoveToken() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
    LocalStore(key, obj) {
      localStorage.setItem(key, JSON.stringify(obj));
    },
    GotoHome() {
      this.$router.push({ name: "home" });
    },
    GetPendingInvoice() {
      return localStorage.getItem("pendingInvoicePage");
    },
    SetPendingInvoice() {
      localStorage.setItem("pendingInvoicePage", "subscription");
    },
    RemovePendingInvoice() {
      localStorage.removeItem("pendingInvoicePage");
    },
    Logout() {
      this.RemoveToken();
      this.Goto({ name: "Login" });
    },
  },
};
export default mixins;
