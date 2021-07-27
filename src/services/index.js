/* eslint-disable camelcase */
/* eslint-disable max-len  */
import request from "./utils";

const backendURL = " http://localhost:8080";

const usr = {
  getQuizzesByOrgID: (id) => `${backendURL}/user/quizzes/${id}`,
  startQuizSession: `${backendURL}/user/session`,
  submitAnswer: `${backendURL}/user/submitanswer`,
  submitQuiz: `${backendURL}/user/submitquiz`,
  getQuestionsByQuizID: (id) => `${backendURL}/user/questions/${id}`,
  getAssignmentByID: (id) => `${backendURL}/user/assignment/${id}`,
  getAssignmentResultByID: (id) => `${backendURL}/user/results/${id}`,
  submitAssignment: `${backendURL}/user/submitassignment`,
};

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
};
export default new (function Service() {
  // USR ROUTES
  this.usrGetQuizzesByOrgID = (orgID) =>
    request.get(usr.getQuizzesByOrgID(orgID));
  this.usrStartSession = (body) => request.post(usr.startQuizSession, body);
  this.usrGetQuesByQuizID = (id) => request.get(usr.getQuestionsByQuizID(id));
  this.usrSubmitAnswer = (body) => request.post(usr.submitAnswer, body);
  this.usrSubmitQuiz = (body) => request.post(usr.submitQuiz, body);
  this.usrSubmitAssignment = (body) => request.post(usr.submitAssignment, body);
  this.usrgetAssignmentByID = (id) => request.get(usr.getAssignmentByID(id));
  this.usrgetAssignmentResultByID = (id) =>
    request.get(usr.getAssignmentResultByID(id));
  //login
  this.login = (body) => request.post(auth.login, body);
  //signup
  this.signup = (body) => request.post(auth.signup, body);
  //get new token
  this.refreshToken = (body) => request.get(auth.new_token, { body });
  //go to profile
  this.profileInfo = (id) => request.get(auth.gotoProfile(id));
  //product
  this.createProduct = (body) => request.post(prod.createProduct, body);
  this.getProducts = () => request.get(prod.getProducts);
})();
