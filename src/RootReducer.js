import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './common/store/customizationReducer';
import { sessionReducer } from 'domain/login/reducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  session: sessionReducer,
});

export default reducer;
