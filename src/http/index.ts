import axios from "axios";

const $api = axios.create({
  baseURL: "https://api.unsplash.com/",
  withCredentials: true,
});

export default $api;
