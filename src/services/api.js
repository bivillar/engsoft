import axios from "axios";

export default axios.create({
  baseURL: "http://192.241.250.104/",
  responseType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "token 5c6cf69193ac1f585b7fe0316a6d5571f6c71d79"
  }
});
