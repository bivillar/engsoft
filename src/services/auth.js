import axios from "axios";

export default axios.create({
  baseURL: "http://192.241.250.104/",
  responseType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});
