import axios from "axios";

const BACK_URL = "https://med-assistant-backend-production.up.railway.app/";
const TIMEOUT = 60000;

export const api = axios.create({
  baseURL: BACK_URL,
  withCredentials: true,
  timeout: TIMEOUT,
});
