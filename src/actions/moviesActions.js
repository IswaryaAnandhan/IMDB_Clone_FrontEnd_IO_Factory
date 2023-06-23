// Redux actions for movies

import moviesService from '../services/moviesService';

export const getAllMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await moviesService.getAllMovies();
      dispatch({ type: 'SET_MOVIES', payload: movies });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createMovie = (movieData) => {
  return async (dispatch) => {
    try {
      const newMovie = await moviesService.createMovie(movieData);
      dispatch({ type: 'ADD_MOVIE', payload: newMovie });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateMovie = (id, movieData) => {
  return async (dispatch) => {
    try {
      const updatedMovie = await moviesService.updateMovie(id, movieData);
      dispatch({ type: 'UPDATE_MOVIE', payload: updatedMovie });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMovie = (id) => {
  return async (dispatch) => {
    try {
      await moviesService.deleteMovie(id);
      dispatch({ type: 'DELETE_MOVIE', payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
