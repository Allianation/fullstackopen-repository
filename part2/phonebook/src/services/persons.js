import axios from "axios";
const baseUrl = "/api/persons";

export const getAll = () => {
  return axios.get(baseUrl);
};

export const getByName = (name) => {
  return axios.get(`${baseUrl}/name/${name}`);
};

export const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

export const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

export const delete_ = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
