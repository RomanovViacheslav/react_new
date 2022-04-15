import { combineReducers } from 'redux';
import userInfoReducer from './auth/reducer';
import charactersReducer from './characters/reducer';

const rootReducer = combineReducers({
  auth: userInfoReducer,
  character: charactersReducer,
});

export default rootReducer;
