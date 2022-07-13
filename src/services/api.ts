import axios from "axios";
import { IUser } from "../interfaces/IUser";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use((config: any) => {
  const user: IUser = JSON.parse(String(localStorage.getItem("user")));
  const token = user?.token ?? "";

  config.headers["x-access-token"] = token;
  return config;
});

export default api;
