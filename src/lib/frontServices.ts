import axios from "axios";

export const baseURL = "/api/";

const BaseApi = axios.create({
  baseURL: baseURL,
});

export default BaseApi;
