import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/smirk-9248a/us-central1/api",
});

export default instance;
