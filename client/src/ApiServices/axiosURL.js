import axios from "axios";
import { Url } from "./backendURLs";

const instance = axios.create({
  baseURL: Url,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      if (originalRequest.url === Url + "auth/token") {
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      if (!originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("ref_token");

        if (refreshToken) {
          try {
            const res = await axios.post(Url + "auth/token/", {
              refresh_token: refreshToken,
            });
            if (res.status === 201 || res.status === 200) {
              localStorage.setItem("ref_token", res.data.refresh_token);
              localStorage.setItem("user", res.data.access_token);
              originalRequest.headers["Authorization"] =
                "Bearer " + localStorage.getItem("user");
              return axios(originalRequest);
            }
          } catch (err) {
            console.log(err.response);
            localStorage.clear();
            window.location.href = "/login";
            return Promise.reject(err);
          }
        } else {
          console.log("No refresh token was found");
          localStorage.clear();
          window.location.href = "/login";
          return Promise.reject(error);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
