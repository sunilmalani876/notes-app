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
  return apiClient.post("/sign-in", data);
};

const currentUser = async () => {
  const {
    data: { data },
  } = await apiClient.get("/");

  if (data) return data.email;
};

const createNote = (values: {
  title: string;
  content: string;
  color: string;
}) => {
  return apiClient.post("/notes", values);
};

const getAllNotes = async () => {
  const data = await apiClient.get("/notes");

  if (data) return data;
};

const getNote = async (id: string) => {
  const { data } = await apiClient.get(`/notes/${id}`);

  if (data) return data;
};

const updateNote = async (value, id) => {
  const { data } = await apiClient.patch(`/notes/${id}`, value);

  if (data) return data;
};

const deleteNote = async (id) => {
  const { data } = await apiClient.delete(`/notes/${id}`);

  if (data) return data;
};

export {
  createNote,
  currentUser,
  deleteNote,
  getAllNotes,
  getNote,
  registerUser,
  updateNote,
};
