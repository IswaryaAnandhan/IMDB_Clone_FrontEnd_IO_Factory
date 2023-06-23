// Service for handling API calls related to actors

import axios from 'axios';
import { config } from '../config';

const baseURL = `${config.api}/api/actors`;

const getAllActors = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const createActor = async (actorData) => {
  const response = await axios.post(baseURL, actorData);
  return response.data;
};

const updateActor = async (id, actorData) => {
  const response = await axios.put(`${baseURL}/${id}`, actorData);
  return response.data;
};

const deleteActor = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
};

const actorsService = {
  getAllActors,
  createActor,
  updateActor,
  deleteActor,
};

export default actorsService;
