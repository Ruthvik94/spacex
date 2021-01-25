import axios from "axios";

axios.defaults.baseURL = "https://api.spaceXdata.com";

export const getAll = () => {
  return axios.get("/v3/launches?limit=100");
};

export const getWithFilter = ({ filter }) => {
  let params = "";
  for (let key in filter) {
    params += `&${key}=${filter[key]}`;
  }
  return axios.get(`/v3/launches?limit=100${params}`);
};
