// Redux reducer for producers

const initialState = [];

const producersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCERS':
      return action.payload;
    case 'ADD_PRODUCER':
      return [...state, action.payload];
    case 'UPDATE_PRODUCER':
      return state.map((producer) => (producer._id === action.payload._id ? action.payload : producer));
    case 'DELETE_PRODUCER':
      return state.filter((producer) => producer._id !== action.payload);
    default:
      return state;
  }
};

export default producersReducer;
