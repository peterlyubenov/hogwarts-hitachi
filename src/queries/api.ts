import axios from "axios";

export const hogwartsApi = axios.create({
  baseURL: "https://wizard-world-api.herokuapp.com",
});
