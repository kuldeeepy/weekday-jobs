import axios from "axios";
const url = import.meta.env.VITE_API_URL;

// let body = JSON.stringify({ limit: 20, offset: 0 });

const instance = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});

export default instance;
