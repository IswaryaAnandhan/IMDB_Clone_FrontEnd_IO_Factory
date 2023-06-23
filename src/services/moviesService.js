// Service for handling API calls related to movies

import axios from 'axios';
import { config } from "../config";

const baseURL = `${config.api}/api/movies`;

const getAllMovies = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const createMovie = async (movieData) => {
  const response = await axios.post(baseURL, movieData);
  return response.data;
};

const updateMovie = async (id, movieData) => {
  const response = await axios.put(`${baseURL}/${id}`, movieData);
  return response.data;
};

const deleteMovie = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
};

const moviesService = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};

export default moviesService;
