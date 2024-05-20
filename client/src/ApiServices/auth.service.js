import instance from "./axiosURL";

class AuthServices {
  // --------------------- Authentication routes --------------------------

  register(data) {
    return instance.post("/signup", data);
  }

  login(data) {
    return instance.post("/auth/sign_in", data);
  }

  ResetPassword(data) {
    return instance.post("/signup/reset-password", data);
  }

  logout() {
    localStorage.clear();
  }

  getCurrentUser() {
    return localStorage.getItem("user");
  }

  // google auth

  Google_login(data) {
    return instance.post("/google_login", data);
  }

  Google_Signup(data) {
    return instance.post("/google_signup", data);
  }

  // github auth

  Github_login(data) {
    return instance.post("/github_login", data);
  }

  Github_Signup(data) {
    return instance.post("/github_signup", data);
  }

  //   ----------------------- end of auth routes --------------------

  // ----------------------- protected routes ------------------------

  getAllPosts() {
    return instance.get("/posts/all");
  }

  getDomainSpecificPosts(DomainId) {
    return instance.get(`/domain/${DomainId}`);
  }

  getLanguages() {
    return instance.get("/quiz-selection");
  }

  getSearchedPosts(SearchedKeyword) {
    return instance.get(`/posts/${SearchedKeyword}`);
  }

  getPost(PostId) {
    return instance.get(`/posts/${PostId}`);
  }

  getQuizQuestions(startQuizIdUrl) {
    return instance.get(`/quiz/${startQuizIdUrl}`);
  }

  getPopularPosts() {
    return instance.get(`/posts/popular-articles`);
  }

  getDomains() {
    return instance.get(`/domains`);
  }

  verifyQuiz(data) {
    return instance.post("/quiz/verify", data);
  }

  contactus(data) {
    return instance.post(
      "/contactus",
      // {
      //   headers: {
      //     Authorization:
      //       "Bearer " +
      //       localStorage.getItem("user") +
      //       " " +
      //       localStorage.getItem("ref_token"),
      //   },
      // },
      data
    );
  }
}

// -------------------------- end of protected routes --------------------

export default new AuthServices();
