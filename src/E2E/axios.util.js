import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

// const APIBACKEND = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_API_URL_BACKEND,
// });

// const APIAI = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_API_URL_AI,
// });

const APIUSER = axios.create({
  baseURL: import.meta.env.VITE_SERVER_APP_URL_AI_USER,
});

export { APIUSER };
