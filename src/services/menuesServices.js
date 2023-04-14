import axios from "axios";

export const getMenues = () => {
  return axios.get("http://localhost:5000/menues");
};

export const deleteMenue = (id) => {
  return axios.delete(`http://localhost:5000/menues/${id}`);
};

export const updateMenues = (id, data) => {
  return axios.patch(`http://localhost:5000/menues/${id}`, data);
};

export const getMenuesById = (id) => {
  return axios.get(`http://localhost:5000/menues/${id}`);
};

export const createNewMenue = (data) => {
  return axios.post("http://localhost:5000/menues", data);
};
