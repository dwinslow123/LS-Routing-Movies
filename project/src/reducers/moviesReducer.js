import { GET_MOVIES } from '../actions';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    default: 
      return state;
  }
};

export default moviesReducer;