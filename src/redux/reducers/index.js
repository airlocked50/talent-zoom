import { combineReducers } from 'redux';
import { stepReducer } from './stepReducer';
import { updateReducer } from './updateReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  step: stepReducer,
  user: userReducer,
  update: updateReducer,
});
