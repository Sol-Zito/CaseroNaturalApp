import axios from "axios";

export const getSandwicheria = () => {
  return axios.get("http://localhost:5000/sandwicheria");
};

export const deleteSandwich = (id) => {
  return axios.delete(`http://localhost:5000/sandwicheria/${id}`);
};

export const updateSandwich = (id, data) => {
  return axios.patch(`http://localhost:5000/sandwicheria/${id}`, data);
};

export const getSandwichById = (id) => {
  return axios.get(`http://localhost:5000/sandwicheria/${id}`);
};

export const createNewSandwich = (data) => {
  return axios.post("http://localhost:5000/sandwicheria", data);
};
