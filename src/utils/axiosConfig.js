import axios from 'axios';
import { getLocalStorageByKey } from '../utils/localStorage';
// import { loginActions } from '../actions/login.actions';

const baseURL = process.env.REACT_APP_API_URL;

const app = axios.create({
  baseURL
});

app.interceptors.request &&
  app.interceptors.request.use(
    config => {
      const data = getLocalStorageByKey('LOGIN');

      if (data) {
        config.headers.common.Authorization = `Bearer ${data.token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

// app.interceptors.response.use(
//   response => response.data,
//   error => {
//     if (403 === error.response.status) {
//       localStorage.clear();
//       loginActions.clearLoginState();
//       window.location.href = '/login';
//     }
//     if (410 === error.response.status) {
//       localStorage.clear();
//       loginActions.clearLoginState();
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export default app;
