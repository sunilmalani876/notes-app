import userStore from "@/store/user";
import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance for API requests
const apiClient = axios.create({
  baseURL: "http://localhost:8080/user",
  withCredentials: true,
  timeout: 120000,
});

apiClient.interceptors.request.use(
  function (config) {
    // Retrieve user token from local storage
    const token = Cookies.get("token") || "";
    // console.log("token", token);
    // Set authorization header with bearer token
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const registerUser = (data: { email: string; password: string }) => {
  console.log(data);

  return apiClient.post("/sign-in", data);
};

const currentUser = () => {
  const { data } = apiClient.get("/");
  // console.log(data);

  // if (data) {
  //   // Cookies.set("accessToken", data.accessToken);
  //   // const token = Cookies.get("accessToken");
  //   // console.log(token);
  // }

  return data;
};

export { registerUser, currentUser };
