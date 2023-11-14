import axios from "axios";

const fetch = axios.create({
  baseURL: "http://localhost:4000",
});

export { fetch };
