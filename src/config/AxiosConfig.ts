import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
  }
})

instance.interceptors.response.use((response) => response.data,
  error => error.response.data ? Promise.reject(error.response.data) : Promise.reject(error))

export default instance;