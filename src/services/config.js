import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });
api.interceptors.response.use(
  (res) => res.data,
  (error) => console.log(error)
);
export default api;
