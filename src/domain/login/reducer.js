import {
  LOGIN,
  LOGIN_ERROR,
  IN_PROGRESS,
  LOGOUT,
} from './actionType';
const INITIAL_STATE = {
  loggedIn: false,
  loggingIn: false,
  userToken: null,
  logginError: '',
  userInfo: '',
  error: '',
};
export const sessionReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
 
    case IN_PROGRESS:
      return {
        ...state,
        loggingIn: true,
      };
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        userToken: Math.floor(Math.random() * 100) + 1,
        userInfo: action.payload,
      };
    case LOGIN_ERROR:
      console.log('action.payload :>> ', action.payload.error);
      return {
        ...state,
        userToken:null,
        loggedIn: false,
        loggingIn:false,
        error: action.payload.error.message,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
