// Redux reducer for actors

const initialState = [];

const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTORS':
      return action.payload;
    case 'ADD_ACTOR':
      return [...state, action.payload];
    case 'UPDATE_ACTOR':
      return state.map((actor) => (actor._id === action.payload._id ? action.payload : actor));
    case 'DELETE_ACTOR':
      return state.filter((actor) => actor._id !== action.payload);
    default:
      return state;
  }
};

export default actorsReducer;
