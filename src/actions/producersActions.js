// Redux actions for producers

import producersService from '../services/producersService';

export const getAllProducers = () => {
  return async (dispatch) => {
    try {
      const producers = await producersService.getAllProducers();
      dispatch({ type: 'SET_PRODUCERS', payload: producers });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProducer = (producerData) => {
  return async (dispatch) => {
    try {
      const newProducer = await producersService.createProducer(producerData);
      dispatch({ type: 'ADD_PRODUCER', payload: newProducer });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProducer = (id, producerData) => {
  return async (dispatch) => {
    try {
      const updatedProducer = await producersService.updateProducer(id, producerData);
      dispatch({ type: 'UPDATE_PRODUCER', payload: updatedProducer });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProducer = (id) => {
  return async (dispatch) => {
    try {
      await producersService.deleteProducer(id);
      dispatch({ type: 'DELETE_PRODUCER', payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
