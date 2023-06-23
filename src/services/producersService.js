// Service for handling API calls related to producers

import axios from 'axios';
import { config } from '../config';

const baseURL = `${config.api}/api/producers`;

const getAllProducers = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const createProducer = async (producerData) => {
  const response = await axios.post(baseURL, producerData);
  return response.data;
};

const updateProducer = async (id, producerData) => {
  const response = await axios.put(`${baseURL}/${id}`, producerData);
  return response.data;
};

const deleteProducer = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
};

const producersService = {
  getAllProducers,
  createProducer,
  updateProducer,
  deleteProducer,
};

export default producersService;
