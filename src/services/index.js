/* eslint-disable camelcase */
/* eslint-disable max-len  */
import request from "./utils";

const backendURL = "http://localhost:8080";

const auth = {
  signup: `${backendURL}/users/signup`,
  login: `${backendURL}/users/login`,
  new_token: `${backendURL}/users/new_access_token`,
  gotoProfile: (id) => `${backendURL}/users/${id}`,
};

const prod = {
  getProducts: `${backendURL}/products`,
  getProductById: (id) => `${backendURL}/products/${id}`,
  removeProductById: (id) => `${backendURL}/products/${id}`,
  createProduct: `${backendURL}/products`,
  updateProductById: (id) => `${backendURL}/products/${id}`,
};
const ord = {
  createOrder: `${backendURL}/orders`,
  getOrders: `${backendURL}/orders`,
  getOrderById: (id) => `${backendURL}/orders/${id}`,
  deleteOrderById: (id) => `${backendURL}/orders/${id}`,
  updateOrderById: (id) => `${backendURL}/orders/${id}`,
};
export default new (function Service() {
  //login
  this.login = (body) => request.post(auth.login, body);
  //signup
  this.signup = (body) => request.post(auth.signup, body);
  //get new token
  this.refreshToken = (body) => request.get(auth.new_token, body);
  //go to profile
  this.profileInfo = (id) => request.get(auth.gotoProfile(id));
  //product
  this.createProduct = (body) => request.post(prod.createProduct, body);
  this.getProducts = () => request.get(prod.getProducts);
  this.updateProduct = (id, body) =>
    request.patch(prod.updateProductById(id), body);
  this.removeProd = (id) => request.delete(prod.removeProductById(id));
  //order
  this.createOrder = (body) => request.post(ord.createOrder, body);
  this.getOrderById = (id) => request.get(ord.removeProductById(id));
  this.getOrders = () => request.get(ord.getOrders);
  this.updateOrderById = (id, body) =>
    request.patch(ord.updateOrderById(id), body);
  this.removeOrder = (id) => request.delete(prod.deleteOrderById(id));
})();
