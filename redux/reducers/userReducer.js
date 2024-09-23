import { FETCH_USERS, ADD_USER, UPDATE_USER, DELETE_USER, SET_LOADING, SET_ERROR } from '../types';

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      return { ...state, users: state.users.map(user => user.id === action.payload.id ? action.payload : user) };
    case DELETE_USER:
      return { ...state, users: state.users.filter(user => user.id !== action.payload) };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}