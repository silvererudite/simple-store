/* eslint-disable camelcase */
/* eslint-disable max-len  */
import request from "./utils";

const backendURL = "http://18.140.53.142";

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

const FP = {
  initial: `${backendURL}/public/forget_password_request`,
  checkToken: `${backendURL}/public/forget_password`,
  final: `${backendURL}/public/pwd_request`,
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
  this.loginUser = (body) => request.post(backendURL.loginUser, body);
  //forget password
  this.pwInit = (email) => request.post(FP.initial, { email });
  this.decodeToken = (token) =>
    request.post("https://auth.upskill.com.bd/decode", {
      token: token,
    });
})();
