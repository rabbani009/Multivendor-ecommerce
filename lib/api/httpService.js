import axios from "axios";
// import { Toastify } from "../../components/ui/modules/alert/toastify";
const token =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("token"))
    : "";

axios.defaults.headers.common["Authorization"] = `bearer ${token}`;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // if (expectedError) {
  //   Toastify.fire({
  //     icon: "error",
  //     title: error?.message,
  //   });
  // }

  return Promise.resolve(error);
});

// eslint-disable-next-line
export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};
