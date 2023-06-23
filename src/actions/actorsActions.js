// Redux actions for actors

import actorsService from '../services/actorsService';

export const getAllActors = () => {
  return async (dispatch) => {
    try {
      const actors = await actorsService.getAllActors();
      dispatch({ type: 'SET_ACTORS', payload: actors });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createActor = (actorData) => {
  return async (dispatch) => {
    try {
      const newActor = await actorsService.createActor(actorData);
      dispatch({ type: 'ADD_ACTOR', payload: newActor });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateActor = (id, actorData) => {
  return async (dispatch) => {
    try {
      const updatedActor = await actorsService.updateActor(id, actorData);
      dispatch({ type: 'UPDATE_ACTOR', payload: updatedActor });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteActor = (id) => {
  return async (dispatch) => {
    try {
      await actorsService.deleteActor(id);
      dispatch({ type: 'DELETE_ACTOR', payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
