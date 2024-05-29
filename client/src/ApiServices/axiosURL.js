// import axios from "axios";
// import { Url } from "./backendURLs";

// const instance = axios.create({
//   baseURL: Url,
// });

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response && error.response.status === 401) {
//       if (originalRequest.url === Url + "auth/token") {
//         localStorage.clear();
//         window.location.href = "/login";
//         return Promise.reject(error);
//       }

//       if (!originalRequest._retry) {
//         originalRequest._retry = true;
//         const refreshToken = localStorage.getItem("ref_token");

//         if (refreshToken) {
//           try {
//             const res = await axios.post(Url + "auth/token/", {
//               refresh_token: refreshToken,
//             });
//             if (res.status === 201 || res.status === 200) {
//               localStorage.setItem("ref_token", res.data.refresh_token);
//               localStorage.setItem("user", res.data.access_token);
//               originalRequest.headers["Authorization"] =
//                 "Bearer " + localStorage.getItem("user");
//               return axios(originalRequest);
//             }
//           } catch (err) {
//             console.log(err.response);
//             localStorage.clear();
//             window.location.href = "/login";
//             return Promise.reject(err);
//           }
//         } else {
//           console.log("No refresh token was found");
//           localStorage.clear();
//           window.location.href = "/login";
//           return Promise.reject(error);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default instance;






import axios from 'axios';
import { Url } from './backendURLs';
import { useNavigate } from 'react-router-dom';

// Create an axios instance with a base URL
const instance = axios.create({
  baseURL: Url,
});

// Request interceptor
instance.interceptors.request.use(
  config => {
    // Add auth token to headers if available
    const token = localStorage.getItem('token'); // Or get token from any other storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  response => {
    // Handle the response data
    return response;
  },
  async error => {
    const originalRequest = error.config;

    // Check for 401 Unauthorized error
    if (error.response && error.response.status === 401) {
      console.log('401 error encountered');

      // Avoid redirecting if already on the login page or if the request URL contains 'login'
      if (
        originalRequest.url === `${Url}login` ||
        originalRequest.url.includes('/login')
      ) {
        console.log('Login request error, not redirecting');
        return Promise.reject(error);
      }

      // Avoid retrying the request multiple times
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        // Clear tokens and redirect to the login page
        console.log('Clearing tokens and redirecting to login');
        localStorage.clear();
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }

    // Handle other errors
    if (error.response) {
      // Server responded with a status other than 2xx
      switch (error.response.status) {
        case 403:
          // Forbidden, handle permission errors
          console.error('Forbidden, you do not have permission...');
          break;
        case 500:
          // Server error, handle accordingly
          console.error('Internal server error, please try again later...');
          break;
        default:
          console.error('An error occurred:', error.response.data.message);
      }
    } else if (error.request) {
      // No response received from the server
      console.error('No response received:', error.request);
    } else {
      // Other errors
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;
