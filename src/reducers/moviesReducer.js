// Redux reducer for movies

const initialState = [];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    case 'ADD_MOVIE':
      return [...state, action.payload];
    case 'UPDATE_MOVIE':
      return state.map((movie) => (movie._id === action.payload._id ? action.payload : movie));
    case 'DELETE_MOVIE':
      return state.filter((movie) => movie._id !== action.payload);
    default:
      return state;
  }
};

export default moviesReducer;
