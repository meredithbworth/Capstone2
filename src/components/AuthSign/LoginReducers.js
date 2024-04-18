import { combineReducers } from 'redux';
import { Login, Logout } from './actions';

const initialState = {
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return {
        ...state,
        isAuthenticated: true
      };
    case Logout:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

const loginReducers = combineReducers({
  auth: authReducer
});

export default loginReducers;