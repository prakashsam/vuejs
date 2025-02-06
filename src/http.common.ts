import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://run.mocky.io/v3",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;